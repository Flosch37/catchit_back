import { Router } from 'express';
const router = Router();
import { getAllCollections, createCollection, getCollectionById, updateCollection, deleteCollection } from '../controllers/collectionController.js';

// Ajoutez cette route pour récupérer toutes les collections
router.get('/collection', getAllCollections);

// Créer une nouvelle collection
router.post('/collection', createCollection);

// Lire une collection par son ID
router.get('/collection/:id', getCollectionById);

// Mettre à jour une collection
router.put('/collection/:id', updateCollection);

// Supprimer une collection
router.delete('/collection/:id', deleteCollection);

export default router;
