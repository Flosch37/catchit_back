import Review from '../models/review.js'; 

// Créer une nouvelle review
export async function createReview(req, res) {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getAllReview(req, res) {
  try {
    const reviews = await Review.findAll();
      res.json(reviews); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getReviewById(req, res) {
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
}

export async function updateReview(req, res) {
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
}

export async function deleteReview(req, res) {
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
}

export async function getReviewsByItemId(req, res) {
  const itemParam = req.params.itemId;
  try {
    const reviews = await Review.findAll({
      where: { ItemId: itemParam }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getReviewsByUserId(req, res) {
  try {
    const reviews = await Review.findAll({
      where: { UserId: req.params.userId }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
