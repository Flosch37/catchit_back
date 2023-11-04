const User = require('../models/userModel'); // Importez le modèle User

// Créer un nouvel utilisateur
exports.createUser = (req, res) => {
  // Récupérez les données de la requête
  const userData = req.body;

  User.create(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la création de l'utilisateur : " + err);
    });

};

// Lire un utilisateur par son ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  console.log("Recherche de l'utilisateur avec l'ID : " + userId);

  User.findByPk(userId)
    .then(user => {
      if (user) {
        res.json(user);
        console.log("Utilisateur trouvé");
      } else {
        res.status(404).json({ error: 'Utilisateur non trouvé' });
        console.log("Utilisateur non trouvé");
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
      console.log("Erreur de serveur : " + err);
    });
};

// Mettre à jour un utilisateur
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  User.findByPk(userId)
    .then(user => {
      if (user) {
        return user.update(updatedUserData);
      } else {
        throw new Error('Utilisateur non trouvé');
      }
    })
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la mise à jour de l'utilisateur : " + err);
    });
};
// Supprimer un utilisateur
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then(user => {
      if (user) {
        return user.destroy();
      } else {
        throw new Error('Utilisateur non trouvé'); 
      }
    })
    .then(() => {
      res.json({ message: 'Utilisateur supprimé avec succès' });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
      console.log("Erreur lors de la suppression de l'utilisateur : " + err);
    });
};

