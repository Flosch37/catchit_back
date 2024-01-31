import { Router } from 'express';
import { createUserObjectOwned, getUserObjectOwnedById, updateUserObjectOwned, deleteUserObjectOwned } from '../controllers/userObjectOwnedController.js';

const router = Router();

// Create a new UserObjectOwned
router.post('/user-object-owned', createUserObjectOwned);

// Get a UserObjectOwned by ID
router.get('/user-object-owned/:id', getUserObjectOwnedById);

// Update a UserObjectOwned
router.put('/user-object-owned/:id', updateUserObjectOwned);

// Delete a UserObjectOwned
router.delete('/user-object-owned/:id', deleteUserObjectOwned);

export default router;
