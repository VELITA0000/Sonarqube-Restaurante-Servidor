import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  usuario: mongoose.Types.ObjectId;
  restaurante: mongoose.Types.ObjectId;
  comentario: string;
  calificacion: number;
}

const reviewSchema = new Schema<IReview>({
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  restaurante: { type: Schema.Types.ObjectId, ref: 'Restaurante', required: true },
  comentario: { type: String, required: true },
  calificacion: { type: Number, min: 1, max: 5, required: true },
});

export const Review = mongoose.model<IReview>('Review', reviewSchema);
