export type ToastType = 'success' | 'error';

export interface IToastMessage {
	id: string;
	message: string;
	type: ToastType;
	duration?: number;
}
