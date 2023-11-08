const { Review } = require('../models');

// Créer une nouvelle review
exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire une review par son ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.update(req.body);
      res.json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer une review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.json({ message: 'Review deleted successfully' });
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lister tous les avis pour un objet spécifique
exports.getReviewsByObjectId = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { ObjectId: req.params.objectId }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lister tous les avis par un utilisateur spécifique
exports.getReviewsByUserId = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { UserId: req.params.userId }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
