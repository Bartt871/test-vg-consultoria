/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, IUserCreate } from '@/types/user.d';
import { ApiMethod } from '@/decorators/method';

const users: IUser[] = [];

export default ApiMethod('POST')(async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email } = req.body as IUserCreate;

	if (!name || !email) {
		return res.status(400).json({ message: 'Nome e Email são obrigatórios' });
	}

	const newUser: IUser = { id: users.length++, name, email };

	users.push(newUser);

	return res.status(201).json(newUser);
});
