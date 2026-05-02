import express from 'express';
import { getRestaurantes, createReviewFromView } from './controller';

const router = express.Router();

router.get('/', getRestaurantes);

router.post('/review', createReviewFromView);

export default router;
