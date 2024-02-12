import express from 'express';
import { createReview, getReviewById, updateReview, deleteReview, getReviewsByItemId, getReviewsByUserId } from '../controllers/reviewController.js';

const router = express.Router();

// Créer un nouvel avis
router.post('/reviews', createReview); 

// Obtenir un avis par ID
router.get('/reviews/:id', getReviewById); 

// Mettre à jour un avis
router.put('/reviews/:id', updateReview); 

// Supprimer un avis
router.delete('/reviews/:id', deleteReview); 

// Lister tous les avis pour un objet spécifique
router.get('/reviews/item/:itemId', getReviewsByItemId); 

// Lister tous les avis d'un utilisateur spécifique
router.get('/reviews/user/:userId', getReviewsByUserId); 

export default router;
