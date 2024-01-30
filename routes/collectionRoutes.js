const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Ajoutez cette route pour récupérer toutes les collections
router.get('/collection', collectionController.getAllCollections);

// Créer une nouvelle collection
router.post('/collection', collectionController.createCollection);

// Lire une collection par son ID
router.get('/collection/:id', collectionController.getCollectionById);

// Mettre à jour une collection
router.put('/collection/:id', collectionController.updateCollection);

// Supprimer une collection
router.delete('/collection/:id', collectionController.deleteCollection);

module.exports = router;
