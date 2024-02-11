import Collection from '../models/collection.js'; 
import { validationResult } from 'express-validator';

// Créer une nouvelle collection
export async function createCollection(req, res) {
    console.log("Eu hello");
    console.log("Eh fdp jsuis la jsuis req.body respecte un peu", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const collectionData = req.body;
        const collection = await Collection.create(collectionData);
        res.status(201).json(collection);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Lire une collection par son ID
export async function getCollectionById(req, res) {
    const collectionId = req.params.id;

    try {
        const collection = await Collection.findByPk(collectionId);
        if (collection) {
            res.json(collection);
        } else {
            res.status(404).json({ error: 'Collection non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Lire les collections par l'ID de l'utilisateur
export async function getCollectionByUserId(req, res) {
    const userId = req.params.userId;

    try {
        const collections = await Collection.findAll({
            where: { userId: userId }
        });
        res.json(collections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Mettre à jour une collection
export async function updateCollection(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const collectionId = req.params.id;
    const userId = req.user.id; 
    const updatedCollectionData = req.body;

    try {
        let collection = await Collection.findByPk(collectionId);
        if (!collection) {
            res.status(404).json({ error: 'Collection non trouvée' });
        } else if (collection.user_id !== userId && !req.user.isAdmin) {
            res.status(403).json({ error: 'Action non autorisée' });
        } else {
            collection = await collection.update(updatedCollectionData);
            res.json(collection);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Supprimer une collection
export async function deleteCollection(req, res) {
    const collectionId = req.params.id;

    try {
        const collection = await Collection.findByPk(collectionId);
        if (!collection) {
            res.status(404).json({ error: 'Collection non trouvée' });
        } else {
            await collection.destroy();
            res.json({ message: 'Collection supprimée avec succès' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Récupérer les trois dernières collections
export async function getAllCollections(req, res) {
    try {
        const collections = await Collection.findAll({
            limit: 3,
            order: [['createdAt', 'DESC']]
        });
        res.json(collections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
