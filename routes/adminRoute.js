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

router.get('/adminPage', authenticateToken, isAdmin, (req, res) => {
  res.json({ message: 'Cette route est accessible uniquement par les administrateurs.' });
});

export default router;
