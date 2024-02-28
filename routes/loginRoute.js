// loginRoute.js
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET; 

console.log('JWT_SECRET:', JWT_SECRET);

router.post('/login', async (req, res) => {
    console.log('Tentative de connexion', req.body); 

    const { username, password } = req.body;

    if (!username || !password) {
        console.log('Données de connexion manquantes');
        return res.status(400).json({ message: 'Nom d’utilisateur et mot de passe requis.' });
    }

    try {
        const user = await User.findOne({ where: { username } });
        console.log('Utilisateur trouvé ?', user != null);

        if (!user) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Le mot de passe correspond ?', isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        console.log('Token généré:', token);
        res.json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

export default router;
