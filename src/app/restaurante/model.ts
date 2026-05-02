import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurante extends Document {
  nombre: string;
  direccion: string;
}

const restauranteSchema = new Schema<IRestaurante>({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
});

export const Restaurante = mongoose.model<IRestaurante>('Restaurante', restauranteSchema);
