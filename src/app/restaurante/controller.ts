import { Request, Response } from 'express';
import { Restaurante } from './model';
import { Review } from '../review/model';
import mongoose from 'mongoose';

export const getRestaurantes = async (req: Request, res: Response) => {
  const { nombre } = req.query;

  if (nombre) {
    const restaurante = await Restaurante.findOne({
      nombre: { $regex: new RegExp(nombre.toString(), 'i') }
    });

    if (!restaurante) {
      return res.render('restaurantes', { title: 'Restaurantes', notFound: true });
    }

    // Buscar todas las reviews del restaurante
    const reviews = await Review.find({ restaurante: restaurante._id })
      .populate('usuario')
      .lean();

    return res.render('restaurante', {
      title: restaurante.nombre,
      restaurante,
      reviews,
    });
  }

  const restaurantes = await Restaurante.find().lean();
  res.render('restaurantes', { title: 'Restaurantes', restaurantes });
};

export const createReviewFromView = async (req: Request, res: Response) => {
  try {
    const { usuarioId, restauranteId, comentario, calificacion } = req.body;

    const existente = await Review.findOne({ usuario: usuarioId, restaurante: restauranteId });
    if (existente) {
      return res.status(400).send('Ya hiciste una review para este restaurante.');
    }

    await Review.create({ usuario: usuarioId, restaurante: restauranteId, comentario, calificacion });
    res.redirect(`/restaurantes?nombre=${req.body.restauranteNombre}`);
  } catch (error) {
    res.status(500).send('Error al crear review.');
  }
};
