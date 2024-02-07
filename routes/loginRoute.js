import { Router } from 'express';
import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken'; 
const { sign } = pkg; 

const router = Router();
import User from '../models/user.js';

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Nom d’utilisateur et mot de passe requis.' });
    }

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

export default router;
