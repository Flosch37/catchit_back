import { Router } from 'express';
const router = Router();
import { createUser, getUserById, updateUser, deleteUser, loginUser } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

// Route pour créer un nouvel utilisateur (inscription)
router.post('/register', createUser);

// Route pour la connexion d'un utilisateur
router.post('/login', loginUser);

// Lire un utilisateur par son ID
// Supposons que cette route soit publique et ne nécessite pas d'authentification
router.get('/:id', getUserById);

// Mettre à jour un utilisateur
// Protégez cette route avec le middleware d'authentification
router.put('/:id', authenticateToken, updateUser);

// Supprimer un utilisateur
// Protégez également cette route avec le middleware d'authentification
router.delete('/:id', authenticateToken, deleteUser);

export default router;
