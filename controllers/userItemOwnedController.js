import UserItemOwned  from '../models/userItemowned.js';

// Créer un nouvel objet possédé par l'utilisateur
export async function createUserItemOwned(req, res) {
  try {
    const userItemOwned = await UserItemOwned.create(req.body);
    res.status(201).json(userItemOwned);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Lire un objet possédé par l'utilisateur par son ID
export async function getUserItemOwnedById(req, res) {
  try {
    const userItemOwned = await UserItemOwned.findByPk(req.params.id);
    if (userItemOwned) {
      res.json(userItemOwned);
    } else {
      res.status(404).json({ error: 'UserItemOwned not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllUserItemOwned(req, res) {
  try {
    const allUserItemOwned = await UserItemOwned.findAll(); 
    if (allUserItemOwned) {
      res.json(allUserItemOwned);
    } else {
      res.status(404).json({ error: 'User items owned not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



// Mettre à jour un objet possédé par l'utilisateur
export async function updateUserItemOwned(req, res) {
  try {
    const userItemOwned = await UserItemOwned.findByPk(req.params.id);
    if (userItemOwned) {
      await userItemOwned.update(req.body);
      res.json(userItemOwned);
    } else {
      res.status(404).json({ error: 'UserItemOwned not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Supprimer un objet possédé par l'utilisateur
export async function deleteUserItemOwned(req, res) {
  try {
    const userItemOwned = await UserItemOwned.findByPk(req.params.id);
    if (userItemOwned) {
      await userItemOwned.destroy();
      res.json({ message: 'UserItemOwned deleted successfully' });
    } else {
      res.status(404).json({ error: 'UserItemOwned not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export async function getAllUserItemOwnedByItem(req, res) {
  try {
    const getAllUserItemOwnedByItem = await getAllUserItemOwnedByItem.findAll();
    if (getAllUserItemOwnedByItem) {
      res.json(getAllUserItemOwnedByItem);
    } else {
      res.status(404).json({ error: 'getAllUserItemOwnedByItem not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
