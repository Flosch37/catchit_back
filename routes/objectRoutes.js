const express = require('express');
const router = express.Router();
const objectController = require('../controllers/objectController');

// Créer un nouvel utilisateur
router.post('/object', objectController.createObject);

// Lire un utilisateur par son ID
router.get('/object/:id', objectController.getObjectById);

// Mettre à jour un utilisateur
router.put('/object/:id', objectController.updateObject);

// Supprimer un utilisateur
router.delete('/object/:id', objectController.deleteObject);

module.exports = router;