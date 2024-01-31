import { Router } from 'express';
const router = Router();
import { createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

// Créer un nouvel utilisateur
router.post('/user', createUser);

// Lire un utilisateur par son ID
// Supposons que cette route soit publique et ne nécessite pas d'authentification
router.get('/user/:id', getUserById);

// Mettre à jour un utilisateur
// Protégez cette route avec le middleware d'authentification
router.put('/user/:id', authenticateToken, updateUser);

// Supprimer un utilisateur
// Protégez également cette route avec le middleware d'authentification
router.delete('/user/:id', authenticateToken, deleteUser);

export default router;
