const { Object } = require('../models'); // Importez le modèle Object

// Créer un nouvel objet
exports.createObject = (req, res) => {
  const objectData = req.body;

  Object.create(objectData)
    .then(object => {
      res.status(201).json(object);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la création de l'objet : " + err);
    });
};

// Lire un objet par son ID
exports.getObjectById = (req, res) => {
  const objectId = req.params.id;

  Object.findByPk(objectId)
    .then(object => {
      if (object) {
        res.json(object);
        console.log("Objet trouvé");
      } else {
        res.status(404).json({ error: 'Objet non trouvé' });
        console.log("Objet non trouvé");
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
      console.log("Erreur de serveur : " + err);
    });
};

// Mettre à jour un objet
exports.updateObject = (req, res) => {
  const objectId = req.params.id;
  const updatedObjectData = req.body;

  Object.findByPk(objectId)
    .then(object => {
      if (object) {
        return object.update(updatedObjectData);
      } else {
        throw new Error('Objet non trouvé');
      }
    })
    .then(updatedObject => {
      res.json(updatedObject);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la mise à jour de l'objet : " + err);
    });
};

// Supprimer un objet
exports.deleteObject = (req, res) => {
  const objectId = req.params.id;

  Object.findByPk(objectId)
    .then(object => {
      if (object) {
        return object.destroy();
      } else {
        throw new Error('Objet non trouvé');
      }
    })
    .then(() => {
      res.json({ message: 'Objet supprimé avec succès' });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la suppression de l'objet : " + err);
    });
};

module.exports = exports;
