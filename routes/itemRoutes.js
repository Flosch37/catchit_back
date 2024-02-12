import { Router } from 'express';
const router = Router();
import { createItem, getItemById, updateItem, deleteItem, getItemByCollectionId, getAllItemsByCollectionId } from '../controllers/itemController.js';

// Créer un nouvel utilisateur
router.post('/add', createItem);

// Lire un utilisateur par son ID
router.get('/:id', getItemById);

// Lire tout les objets d'une collection
router.get('/all/:collectionId' ,getAllItemsByCollectionId)

router.get('/:collection/:itemId', getItemByCollectionId);

// Mettre à jour un utilisateur
router.put('/:id', updateItem);

// Supprimer un utilisateur
router.delete('/:id', deleteItem);

export default router;