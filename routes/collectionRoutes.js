import { Router } from 'express';
const router = Router();
import { getAllCollections, createCollection, getCollectionById, updateCollection, deleteCollection } from '../controllers/collectionController.js';


router.get('/', getAllCollections); 

// Créer une nouvelle collection
router.post('/', createCollection); 

// Lire une collection par son ID
router.get('/:id', getCollectionById); 

// Mettre à jour une collection
router.put('/:id', updateCollection); 

// Supprimer une collection
router.delete('/:id', deleteCollection); 

export default router;
