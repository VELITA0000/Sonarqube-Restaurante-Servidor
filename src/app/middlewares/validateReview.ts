import { Request, Response, NextFunction } from 'express';
import { Review } from '../review/model';

export const validateSingleReview = async (req: Request, res: Response, next: NextFunction) => {
  const { usuarioId, restauranteId } = req.body;

  const existente = await Review.findOne({ usuario: usuarioId, restaurante: restauranteId });
  if (existente) {
    return res.status(400).json({ message: 'El usuario ya ha hecho una review para este restaurante' });
  }

  next();
};
