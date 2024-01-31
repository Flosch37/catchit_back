import express from 'express';
import { createReview, getReviewById, updateReview, deleteReview, getReviewsByObjectId, getReviewsByUserId } from '../controllers/reviewController.js';

const router = express.Router();

// Créer un nouvel avis
router.post('/reviews', createReview); // Change '/review' to '/reviews' if you are dealing with multiple reviews

// Obtenir un avis par ID
router.get('/reviews/:id', getReviewById); // Same here

// Mettre à jour un avis
router.put('/reviews/:id', updateReview); // And here

// Supprimer un avis
router.delete('/reviews/:id', deleteReview); // And here

// Lister tous les avis pour un objet spécifique
router.get('/reviews/object/:objectId', getReviewsByObjectId); // Change to '/reviews/object/:objectId'

// Lister tous les avis d'un utilisateur spécifique
router.get('/reviews/user/:userId', getReviewsByUserId); // Change to '/reviews/user/:userId'

export default router;
