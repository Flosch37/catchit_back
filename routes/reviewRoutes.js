import express from 'express';
import { createReview, getReviewById, updateReview, deleteReview, getReviewsByItemId, getReviewsByUserId, getAllReview } from '../controllers/reviewController.js';

const router = express.Router();

// Créer un nouvel avis
router.post('/add', createReview);

router.get('/all', getAllReview)

// Obtenir un avis par ID
router.get('/:id', getReviewById); 

// Mettre à jour un avis
router.put('/:id', updateReview); 

// Supprimer un avis
router.delete('/:id', deleteReview); 

// Lister tous les avis pour un objet spécifique
router.get('/item/:itemId', getReviewsByItemId); 

// Lister tous les avis d'un utilisateur spécifique
router.get('/user/:userId', getReviewsByUserId); 

export default router;
