import { Router } from 'express';
const router = Router();
import { createItem, getItemById, updateItem, deleteItem, getItemByCollectionId, getAllItemsByCollectionId } from '../controllers/itemController.js';

// Créer un nouvel item
router.post('/add', createItem);

// Lire tous les objets d'une collection spécifique
router.get('/all/:collectionId', getAllItemsByCollectionId);

// Lire un item par son ID dans une collection spécifique
// Assurez-vous que cette route est plus spécifique pour éviter les conflits
router.get('/:collectionId/:itemId', getItemByCollectionId);

// Lire un item par son ID
// Cette route devrait être après les routes plus spécifiques pour éviter de capturer leurs requêtes
router.get('/:id', getItemById);

// Mettre à jour un item
router.put('/:id', updateItem);

// Supprimer un item
router.delete('/:id', deleteItem);


export default router;