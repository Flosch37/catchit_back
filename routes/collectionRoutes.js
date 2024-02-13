import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import authenticateToken from '../middlewares/authenticateToken.js'; 
import { getAllCollections, createCollection, getCollectionById, updateCollection, deleteCollection, getCollectionByUserId, getCollectionByName} from '../controllers/collectionController.js';

const router = Router();


const validateCollection = [
  body('name').trim().notEmpty().withMessage('Le nom est requis.'),
  body('description').trim(), 
  
];

router.get('/all', getAllCollections);

router.post('/add', authenticateToken, validateCollection, (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    console.log("ehoh");
    createCollection(req, res);
});

router.get('/:id', getCollectionById);

// Mettre à jour une collection avec vérification du token et de la validation
router.put('/:id', authenticateToken, validateCollection, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    updateCollection(req, res);
});

router.get('/collection/name', getCollectionByName);

router.get('/collections/user/:userId', getCollectionByUserId);

router.put('/collections/user/:userId', authenticateToken, validateCollection, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    updateCollection(req, res);
});

router.delete('/:id', authenticateToken, deleteCollection);

export default router;
