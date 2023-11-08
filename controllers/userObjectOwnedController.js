const { UserObjectOwned } = require('../models');

// Créer un nouvel objet possédé par l'utilisateur
exports.createUserObjectOwned = async (req, res) => {
  try {
    const userObjectOwned = await UserObjectOwned.create(req.body);
    res.status(201).json(userObjectOwned);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire un objet possédé par l'utilisateur par son ID
exports.getUserObjectOwnedById = async (req, res) => {
  try {
    const userObjectOwned = await UserObjectOwned.findByPk(req.params.id);
    if (userObjectOwned) {
      res.json(userObjectOwned);
    } else {
      res.status(404).json({ error: 'UserObjectOwned not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un objet possédé par l'utilisateur
exports.updateUserObjectOwned = async (req, res) => {
  try {
    const userObjectOwned = await UserObjectOwned.findByPk(req.params.id);
    if (userObjectOwned) {
      await userObjectOwned.update(req.body);
      res.json(userObjectOwned);
    } else {
      res.status(404).json({ error: 'UserObjectOwned not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un objet possédé par l'utilisateur
exports.deleteUserObjectOwned = async (req, res) => {
  try {
    const userObjectOwned = await UserObjectOwned.findByPk(req.params.id);
    if (userObjectOwned) {
      await userObjectOwned.destroy();
      res.json({ message: 'UserObjectOwned deleted successfully' });
    } else {
      res.status(404).json({ error: 'UserObjectOwned not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
