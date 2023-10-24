const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Lire un utilisateur par son ID
router.get('/users/:id', userController.getUserById);

// Mettre à jour un utilisateur
router.put('/users/:id', userController.updateUser);

// Supprimer un utilisateur
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
