import express from 'express';
import { getUsuarios } from './controller';

const router = express.Router();

router.get('/', getUsuarios);

export default router;
