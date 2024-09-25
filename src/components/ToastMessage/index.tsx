import { useState } from 'react';

import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';

type ToastMessageProps = {
	content: IToastMessage;
	removeMessage: (messageId: string) => void;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ removeMessage, content: data }) => {
	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>

			<span data-close onClick={() => removeMessage(data.id)}>╳</span>
		</div>
	);
};
