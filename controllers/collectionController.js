const { Collection } = require('../models'); // Importez le modèle Collection

// Créer une nouvelle collection
exports.createCollection = (req, res) => {
  // Récupérez les données de la requête
  const collectionData = req.body;

  Collection.create(collectionData)
    .then(collection => {
      res.status(201).json(collection);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la création de la collection : " + err);
    });
};

// Lire une collection par son ID
exports.getCollectionById = (req, res) => {
  const collectionId = req.params.id;
  console.log("Recherche de la collection avec l'ID : " + collectionId);

  Collection.findByPk(collectionId)
    .then(collection => {
      if (collection) {
        res.json(collection);
        console.log("Collection trouvée");
      } else {
        res.status(404).json({ error: 'Collection non trouvée' });
        console.log("Collection non trouvée");
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
      console.log("Erreur de serveur : " + err);
    });
};

// Mettre à jour une collection
exports.updateCollection = (req, res) => {
  const collectionId = req.params.id;
  const updatedCollectionData = req.body;

  Collection.findByPk(collectionId)
    .then(collection => {
      if (collection) {
        return collection.update(updatedCollectionData);
      } else {
        throw new Error('Collection non trouvée');
      }
    })
    .then(updatedCollection => {
      res.json(updatedCollection);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la mise à jour de la collection : " + err);
    });
};

// Supprimer une collection
exports.deleteCollection = (req, res) => {
  const collectionId = req.params.id;

  Collection.findByPk(collectionId)
    .then(collection => {
      if (collection) {
        return collection.destroy();
      } else {
        throw new Error('Collection non trouvée');
      }
    })
    .then(() => {
      res.json({ message: 'Collection supprimée avec succès' });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la suppression de la collection : " + err);
    });
};
