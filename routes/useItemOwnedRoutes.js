import { Router } from 'express';
import { createUserItemOwned, getUserItemOwnedById, updateUserItemOwned, deleteUserItemOwned } from '../controllers/userItemOwnedController.js';

const router = Router();

// Create a new UserItemOwned
router.post('/user-item-owned', createUserItemOwned);

// Get a UserItemOwned by ID
router.get('/user-item-owned/:id', getUserItemOwnedById);

// Update a UserItemOwned
router.put('/user-item-owned/:id', updateUserItemOwned);

// Delete a UserItemOwned
router.delete('/user-item-owned/:id', deleteUserItemOwned);

export default router;
