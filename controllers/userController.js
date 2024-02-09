import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Assurez-vous que le chemin d'importation est correct

// Fonction pour créer un nouvel utilisateur avec un mot de passe haché
export async function createUser(req, res) {
  const { username, password, email } = req.body;

  try {
    console.log('Request body:', req.body);
    //const hashedPassword = await bcrypt.hash(password, 10); // Hache le mot de passe
    //console.log('Hashed password:', hashedPassword);
    const user = await User.create({
      username,
      password: password,
      email,
    });
    console.log('Created user:', user.toJSON());
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.error("Erreur lors de la création de l'utilisateur : ", err);
  }
}

// Fonction pour connecter un utilisateur avec comparaison du mot de passe
export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    console.log('Login request:', req.body);
    const user = await User.findOne({ where: { username } });
    console.log('Found user:', user ? user.toJSON() : null);
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }
    console.log('Password found:', password); 
    console.log('User password:', user.password); 
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch);
    if (!isMatch) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Generated token:', token);
    res.json({ message: 'Connexion réussie', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Erreur lors de la connexion de l'utilisateur : ", err);
  }
}

// Lire un utilisateur par son ID
export async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    console.log('Get user by ID:', userId);
    const user = await User.findByPk(userId);
    console.log('Found user:', user ? user.toJSON() : null);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Erreur lors de la recherche de l'utilisateur : ", err);
  }
}

// Mettre à jour un utilisateur
export async function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    console.log('Update user by ID:', userId);
    console.log('Updated user data:', updatedUserData);
    const user = await User.findByPk(userId);
    console.log('Found user:', user ? user.toJSON() : null);
    if (user) {
      const updatedUser = await user.update(updatedUserData);
      console.log('Updated user:', updatedUser.toJSON());
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.error("Erreur lors de la mise à jour de l'utilisateur : ", err);
  }
}

// Supprimer un utilisateur
export async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    console.log('Delete user by ID:', userId);
    const user = await User.findByPk(userId);
    console.log('Found user:', user ? user.toJSON() : null);
    if (user) {
      await user.destroy();
      res.json({ message: 'Utilisateur supprimé avec succès' });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Erreur lors de la suppression de l'utilisateur : ", err);
  }
}
