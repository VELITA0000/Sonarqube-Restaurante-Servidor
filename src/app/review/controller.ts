import { Request, Response } from 'express';
import { Review } from './model';

export const obtenerReviews = async (req: Request, res: Response) => {
  const reviews = await Review.find().populate('usuario restaurante');
  res.render('reviews', { title: 'Reseñas', reviews });
};

export const crearReview = async (req: Request, res: Response) => {
  try {
    const { usuarioId, restauranteId, comentario, calificacion } = req.body;
    const review = new Review({ usuario: usuarioId, restaurante: restauranteId, comentario, calificacion });
    await review.save();
    res.redirect('/reviews');
  } catch (error) {
    res.status(500).json({ message: 'Error al crear review', error });
  }
};
