// isAdmin.js
import User from '../models/user'; 

export const isAdmin = async (req, res, next) => {
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
