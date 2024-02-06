import { Router } from 'express';
import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken'; // Modification ici
const { sign } = pkg; // Et ici
import User from '../models/user.js'; // Assurez-vous que le chemin est correct

const router = Router();

const JWT_SECRET = 'votre_secret_jwt_ici'; // Utilisez une variable d'environnement pour votre secret

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
