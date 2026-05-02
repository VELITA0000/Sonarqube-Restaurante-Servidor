import express from 'express';
import usuarioRoutes from './usuario/routes';
import restauranteRoutes from './restaurante/routes';
import reviewRoutes from './review/routes';

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/restaurantes', restauranteRoutes);
router.use('/reviews', reviewRoutes);

router.get('/', (req, res) => res.render('index', { title: 'Inicio' }));

export default router;
