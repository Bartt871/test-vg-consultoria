import { createContext, useEffect, useState } from "react";
import { IToastMessageProvider, IContext } from "./types";
import { IToastMessage, ToastType } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";

import styles from './style.module.css';

export const ToastMessageContext = createContext<IContext>({} as IContext);

export const ToastMessageProvider = ({ children }: IToastMessageProvider) => {
    const [messages, setMessages] = useState<IToastMessage[]>([]);

    const notify = (type: ToastType, message: string, duration?: number) => {
        const messageId = generateUniqueId();

        setMessages(prev => {
            const messages = [...prev];

            messages.push({
                id: messageId,
                message: message,
                type: type
            });

            return messages;
        });

        (duration) && setTimeout(() => removeMessage(messageId), duration * 1000);
    }

    const removeMessage = (id: string) => setMessages(prev => [...prev].filter((message) => message.id !== id));
    const generateUniqueId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <>
            <ToastMessageContext.Provider
                value={{ notify, messages }}
                children={
                    <>
                        <div className={styles['toast-container']}>
                            {messages.map(message => {
                                return <ToastMessage
                                    key={message.id}
                                    content={message}
                                    removeMessage={removeMessage}
                                />
                            })}
                        </div>
                        {children}
                    </>
                }
            />
        </>
    );
}