import Item from '../models/item.js'; 


// Créer un nouvel objet
export function createItem(req, res) {
  const itemData = req.body;

  Item.create(itemData)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la création de l'objet : " + err);
    });
}

// Lire un objet par son ID
export function getItemById(req, res) {
  const itemId = req.params.id;

  Item.findByPk(itemId)
    .then(item => {
      if (item) {
        res.json(item);
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

export async function getItemByCollectionId(req, res) {
  const collectionId = req.params.collectionId;

  try {
      const item = await Item.findAll({
          where: { collectionId: collectionId }
      });
      res.json(item);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}

// Récupérer les trois dernières collections
export async function getAllItemsByCollectionId(req, res) {
  const collectionId = req.params.collectionId;
  try {
      const items = await Item.findAll({
          where: { collectionId: collectionId }
      });
      res.json(items);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}


// Mettre à jour un objet
export function updateItem(req, res) {
  const itemId = req.params.id;
  const updatedItemData = req.body;

  Item.findByPk(itemId)
    .then(item => {
      if (item) {
        return item.update(updatedItemData);
      } else {
        throw new Error('Objet non trouvé');
      }
    })
    .then(updatedItem => {
      res.json(updatedItem);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la mise à jour de l'objet : " + err);
    });
}

// Supprimer un objet
export function deleteItem(req, res) {
  const itemId = req.params.id;

  Item.findByPk(itemId)
    .then(item => {
      if (item) {
        return item.destroy();
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


