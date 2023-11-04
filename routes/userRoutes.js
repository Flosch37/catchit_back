const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Créer un nouvel utilisateur
router.post('/user', userController.createUser);

// Lire un utilisateur par son ID
router.get('/user/:id', userController.getUserById);

// Mettre à jour un utilisateur
router.put('/user/:id', userController.updateUser);

// Supprimer un utilisateur
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
