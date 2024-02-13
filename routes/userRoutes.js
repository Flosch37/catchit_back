import { Router } from 'express';
const router = Router();
import { createUser, getUserById, updateUser, deleteUser, loginUser , getUserByName, getAllUsers } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

router.get('/all', getAllUsers);

// Route pour créer un nouvel utilisateur (inscription)
router.post('/register', createUser);

// Route pour la connexion d'un utilisateur
router.post('/login', loginUser);

// Route pour la déconnexion d'un utilisateur
router.post('/logout', (req, res) => {
  res.json({ message: 'Déconnexion réussie. Veuillez supprimer le token côté client.' });
});

// Lire un utilisateur par son ID
router.get('/:id', getUserById);

router.get('/name/:username', getUserByName);

// Mettre à jour un utilisateur
router.put('/:id', authenticateToken, updateUser);

// Supprimer un utilisateur
router.delete('/:id', authenticateToken, deleteUser);

export default router;
