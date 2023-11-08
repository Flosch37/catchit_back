const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

// Créer un nouvel avis
router.post('/review', reviewController.createReview);

// Obtenir un avis par ID
router.get('/review/:id', reviewController.getReviewById);

// Mettre à jour un avis
router.put('/review/:id', reviewController.updateReview);

// Supprimer un avis
router.delete('/review/:id', reviewController.deleteReview);

// Lister tous les avis pour un objet spécifique
router.get('/review/object/:objectId', reviewController.getReviewsByObjectId);

// Lister tous les avis d'un utilisateur spécifique
router.get('/review/user/:userId', reviewController.getReviewsByUserId);

module.exports = router;
