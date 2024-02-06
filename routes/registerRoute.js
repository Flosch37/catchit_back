import { Router } from 'express';
import { hash } from 'bcrypt';
import User from '../models/user.js'; // Assurez-vous que le chemin est correct

const router = Router();

const JWT_SECRET = 'votre_secret_jwt_ici'; // Utilisez une variable d'environnement pour votre secret

router.post('/api/auth/register', async (req, res) => {
    const { username, password, email } = req.body;

    // Validation simple
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        // Vérifiez si l'utilisateur existe déjà
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(409).json({ message: 'Le nom d’utilisateur est déjà pris.' });
        }

        // Hashage du mot de passe
        const hashedPassword = await hash(password, 10);

        // Création du nouvel utilisateur
        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        });

        // Vous pouvez également générer un token JWT ici si vous souhaitez connecter l'utilisateur immédiatement après l'inscription
        // const token = sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'Utilisateur créé avec succès', userId: newUser.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

export default router;
