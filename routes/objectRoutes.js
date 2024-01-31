import { Router } from 'express';
const router = Router();
import { createObject, getObjectById, updateObject, deleteObject } from '../controllers/objectController.js';

// Créer un nouvel utilisateur
router.post('/object', createObject);

// Lire un utilisateur par son ID
router.get('/object/:id', getObjectById);

// Mettre à jour un utilisateur
router.put('/object/:id', updateObject);

// Supprimer un utilisateur
router.delete('/object/:id', deleteObject);

export default router;