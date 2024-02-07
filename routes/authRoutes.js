import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = Router();


const JWT_SECRET = process.env.JWT_SECRET;

// Route d'inscription
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email || password.length < 8) {
        return res.status(400).json({ message: 'Validation failed: all fields are required and password must be at least 8 characters long.' });
    }

    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(409).json({ message: 'Username is already taken.' });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        });

        const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User successfully created', userId: newUser.id, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

// Route de connexion
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

export default router;
