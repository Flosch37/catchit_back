import Object from '../models/object.js'; // Remplacez 'object.js' par le nom de votre fichier de modèle d'objet


// Créer un nouvel objet
export function createObject(req, res) {
  const objectData = req.body;

  Object.create(objectData)
    .then(object => {
      res.status(201).json(object);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la création de l'objet : " + err);
    });
}

// Lire un objet par son ID
export function getObjectById(req, res) {
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
}

export async function getObjectByCollectionId(req, res) {
  const collectionId = req.params.collectionId;

  try {
      const object = await Object.findAll({
          where: { collectionId: collectionId }
      });
      res.json(object);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}

// Récupérer les trois dernières collections
export async function getAllObjectsByCollectionId(req, res) {
  const collectionId = req.params.collectionId;
  try {
      const objects = await Object.findAll({
          where: { collectionId: collectionId },
          limit: 500,
          order: [['createdAt', 'DESC']]
      });
      res.json(objects);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}


// Mettre à jour un objet
export function updateObject(req, res) {
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
}

// Supprimer un objet
export function deleteObject(req, res) {
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
}


