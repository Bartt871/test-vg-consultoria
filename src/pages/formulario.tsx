/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormData extends FormData {
	name: string;
	email: string;
}

export default function Form() {

	const { register, handleSubmit, formState: { errors } } = useForm<IFormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const response = await fetch('/api/users/create', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(await response.text());
			}

			alert('Usuário registrado com sucesso!');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.field} content={errors.name && errors.name.message}>
						<input
							type="text"
							placeholder="Name"
							{...register('name', {
								required: 'O nome é obrigatório'
							})}
						/>
					</div>

					<div className={styles.field} content={errors.email && errors.email.message}>
						<input
							type="email"
							placeholder="E-mail"
							{...register('email', {
								required: 'O e-mail é obrigatório', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Digite um e-mail válido' },
							})}
						/>
					</div>

					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
