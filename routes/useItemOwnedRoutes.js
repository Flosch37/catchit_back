import { Router } from 'express';
import { createUserItemOwned, getUserItemOwnedById, updateUserItemOwned, deleteUserItemOwned } from '../controllers/userItemOwnedController.js';

const router = Router();

// Create a new UserItemOwned
router.post('/add', createUserItemOwned);

// Get a UserItemOwned by ID
router.get('/user-item-owned/:id', getUserItemOwnedById);

// Update a UserItemOwned
router.put('/:id', updateUserItemOwned);

// Delete a UserItemOwned
router.delete('/:id', deleteUserItemOwned);

export default router;
