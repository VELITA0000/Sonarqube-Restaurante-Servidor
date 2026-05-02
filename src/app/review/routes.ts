import express from 'express';
import { crearReview, obtenerReviews } from './controller';
import { validateSingleReview } from '../middlewares/validateReview';
import { Review } from './model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('usuario restaurante').lean();
    res.render('reviews', { title: 'Reseñas de Usuarios', reviews });
  } catch (err) {
    res.status(500).json({ message: 'Error al cargar las reseñas', error: err });
  }
});

router.get('/json', obtenerReviews);

router.post('/', validateSingleReview, crearReview);

export default router;
