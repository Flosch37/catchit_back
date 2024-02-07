import { Router } from 'express';
import { hash } from 'bcrypt';
import User from '../models/user.js';
// Importation ajustée pour jsonwebtoken
import jwt from 'jsonwebtoken'; 

const router = Router();

// Utilisation d'une variable d'environnement pour le secret JWT
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/api/auth/register', async (req, res) => {
    const { username, password, email } = req.body;

    // Validation améliorée (exemple basique)
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

        // Utilisation de sign à partir de l'importation ajustée
        const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User successfully created', userId: newUser.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

export default router;
