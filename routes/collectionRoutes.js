const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Créer un nouvel utilisateur
router.post('/collection', collectionController.createCollection);

// Lire un utilisateur par son ID
router.get('/collection/:id', collectionController.getCollectionById);

// Mettre à jour un utilisateur
router.put('/collection/:id', collectionController.updateCollection);

// Supprimer un utilisateur
router.delete('/collection/:id', collectionController.deleteCollection);

module.exports = router;