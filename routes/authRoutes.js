import Router from 'express';
import { hash, compare } from 'bcrypt';
import sign  from 'jsonwebtoken';
const router = Router();

// Importez votre modèle d'utilisateur et tout autre service nécessaire
import User from '../models/user.js';

// Fonction hypothétique pour récupérer un utilisateur par son nom d'utilisateur
async function getUserByUsername(username) {
    // Implémentez la logique pour trouver l'utilisateur dans votre base de données
    // Cet exemple utilise un modèle Sequelize. Ajustez selon votre ORM/ODM ou méthode d'accès à la DB.
    return await User.findOne({ where: { username } });
}

// Route d'inscription (si nécessaire)
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await hash(req.body.password, 10);
        // Créez ici l'utilisateur dans votre base de données
        const user = await User.create({ 
            username: req.body.username,
            passwordHash: hashedPassword 
        });
        res.status(201).json({ message: "User created successfully", userId: user.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route de connexion
router.post('/login', async (req, res) => {
    try {
        const user = await getUserByUsername(req.body.username);
        if (user && await compare(req.body.password, user.passwordHash)) {
            const token = sign(
                { userId: user.id, username: user.username },
                process.env.JWT_SECRET, // Utilisez une variable d'environnement pour votre clé secrète
                { expiresIn: '24h' }
            );
            res.json({ message: "Auth successful", token });
        } else {
            res.status(401).json({ message: "Auth failed" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
