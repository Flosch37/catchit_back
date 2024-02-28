import { Router } from 'express';
import { hash } from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken'; 

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email || password.length < 8) {
        return res.status(400).json({ message: 'La validation a échoué : tous les champs sont requis et le mot de passe doit contenir au moins 8 caractères.' });
    }

    try {
        console.log('Request body:', req.body);
        const existingUser = await User.findOne({ where: { username } });
        console.log('Existing user:', existingUser ? existingUser.toJSON() : null);
        if (existingUser) {
            return res.status(409).json({ message: 'Username is already taken.' });
        }

        const newUser = await User.create({
            username,
            password: password,
            email
        });
        console.log('Created user:', newUser.toJSON());

        const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

        console.log('Generated token:', token);
        res.status(201).json({ message: 'User successfully created', userId: newUser.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

export default router;
