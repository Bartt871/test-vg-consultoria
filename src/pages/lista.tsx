/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect, useState } from 'react';
import { IUser } from '@/types/user';

import styles from '@/styles/lista.module.css';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);

	async function getUsersList() {
		try {
			const response = await fetch('/api/users');
			const data = await response.json();

			if (!response.ok) throw new Error('Erro ao obter os dados');

			setUsers(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUsersList();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de usuários</h2>

				<div data-list-container>
					{/* Exemplo */}
					{users.map((user, index) => <div key={index} data-list-item>ID {user.id} - {user.name} ({user.email})</div>)}
				</div>
			</div>
		</div>
	);
}
