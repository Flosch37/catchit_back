const express = require('express');
const userObjectOwnedController = require('../controllers/userObjectOwnedController');

const router = express.Router();

// Create a new UserObjectOwned
router.post('/user-object-owned', userObjectOwnedController.createUserObjectOwned);

// Get a UserObjectOwned by ID
router.get('/user-object-owned/:id', userObjectOwnedController.getUserObjectOwnedById);

// Update a UserObjectOwned
router.put('/user-object-owned/:id', userObjectOwnedController.updateUserObjectOwned);

// Delete a UserObjectOwned
router.delete('/user-object-owned/:id', userObjectOwnedController.deleteUserObjectOwned);

module.exports = router;
