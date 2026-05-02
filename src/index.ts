import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {engine} from 'express-handlebars';
import routes from './app/routes';
import { connectDB } from './database/database';
//? import { seedUsuarios } from './app/usuario/controller';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//* Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Conexion a MongoDB Atlas
connectDB();
//? seedUsuarios();

//* Configuración de Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  extname: 'handlebars',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//* Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//* Rutas generales
app.use('/', routes);

//* Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
