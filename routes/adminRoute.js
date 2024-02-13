import express from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
import User from '../models/user.js';

const router = express.Router();

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id; 
    const user = await User.findByPk(userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: "Accès refusé. Vous n'êtes pas autorisé à accéder à cette ressource." });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la vérification des autorisations.' });
  }
};
// Mettre à jour le rôle d'un utilisateur
router.put('/user/:id/role', authenticateToken, isAdmin, async (req, res) => {
  const { role } = req.body;
  const { id } = req.params;
  const VALID_ROLES = ['admin', 'user']; 

  try {
    // Vérification si le rôle fourni est valide
    if (!VALID_ROLES.includes(role)) {
      return res.status(400).json({ message: "Rôle non valide." });
    }

    const user = await User.findByPk(id);
    if (user) {
      await user.update({ role });
      res.json({ message: 'Rôle de l\'utilisateur mis à jour avec succès.' });
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé." });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du rôle de l\'utilisateur.' });
  }
});


export default router;
