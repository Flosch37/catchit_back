import { Router } from 'express';
import { createUserItemOwned, getUserItemOwnedById,getAllUserItemOwned, getAllUserItemOwnedByItemId, updateUserItemOwned, deleteUserItemOwned } from '../controllers/userItemOwnedController.js';

const router = Router();

// Create a new UserItemOwned
router.post('/add', createUserItemOwned);

// Get a UserItemOwned by ID
router.get('/user-item-owned/:id', getUserItemOwnedById);

router.get('/all', getAllUserItemOwned);

router.get('/all/:id'), getAllUserItemOwnedByItemId;

// Update a UserItemOwned
router.put('/:id', updateUserItemOwned);

// Delete a UserItemOwned
router.delete('/:id', deleteUserItemOwned);

export default router;
