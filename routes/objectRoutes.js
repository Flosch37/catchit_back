import { Router } from 'express';
const router = Router();
import { createObject, getObjectById, updateObject, deleteObject, getObjectByCollectionId, getAllObjectsByCollectionId } from '../controllers/objectController.js';

// Créer un nouvel utilisateur
router.post('/add', createObject);

// Lire un utilisateur par son ID
router.get('/:id', getObjectById);

// Lire tout les objets d'une collection
router.get('/all/:collectionId' ,getAllObjectsByCollectionId)

router.get('/:collection/:objectId', getObjectByCollectionId);

// Mettre à jour un utilisateur
router.put('/:id', updateObject);

// Supprimer un utilisateur
router.delete('/:id', deleteObject);

export default router;