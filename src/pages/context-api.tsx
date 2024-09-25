/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { useToastMessage } from '@/contexts/ToastMessageProvider/useToastMessage';

export default function ContextApi() {
	const toastMessage = useToastMessage();

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={() => toastMessage.notify('success', 'Sucesso', 2)}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={() => toastMessage.notify('error', 'Erro')}>
					Disparar mensagem de erro
				</button>
			</div>
		</>
	);
}
