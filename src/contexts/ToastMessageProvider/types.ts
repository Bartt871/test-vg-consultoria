import { IToastMessage, ToastType } from "@/types/toast-message";
import { ReactNode } from "react";

export interface IContext {
    messages: IToastMessage[];
    notify: (type: ToastType, message: string, duration?: number) => void;
}

export interface IToastMessageProvider {
    children: ReactNode;
}