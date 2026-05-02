import { Request, Response } from 'express';
import { Usuario } from './model';

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.find().lean();
  res.render('usuarios', { title: 'Usuarios', usuarios });
};

// export const seedUsuarios = async () => {
//   const existentes = await Usuario.find();
//   if (existentes.length === 0) {
//     await Usuario.insertMany([
//       { nombre: 'Elí', email: 'eli@example.com' },
//       { nombre: 'Ana', email: 'ana@example.com' },
//       { nombre: 'Luis', email: 'luis@example.com' },
//     ]);
//     console.log('👤 Usuarios base insertados');
//   }
// };