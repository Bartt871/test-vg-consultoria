import { Modal } from "@/components/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from './style.module.scss';

/**
 * 
 * Nessa atividade decidi apresentar um pouco como
 * é minha forma pessoal de programar, para que assim
 * possam conhecer um pouco melhor meu trabalho
 */

const messages = [
    'Não é todo dia que um modal se abre para você. Tem certeza que vai perder essa chance?',
    'Está prestes a fechar o modal... Coragem!',
    'Pense duas vezes antes de fechar... Ele pode se ofender!',
    'Você tem certeza que quer fechar? A vida lá fora pode esperar!',
    'O modal também tem sentimentos. Feche com cuidado!',
    'Fechar o modal pode causar saudade depois!'
];

const ConfirmationModal = ({
    modalIsOpen,
    setModalIsOpen
}: {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [activeMessage, setActiveMessage] = useState<string>();
    const [isTrollMode, setIsTrollMode] = useState(false);

    useEffect(() => {
        if (modalIsOpen) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setActiveMessage(randomMessage);
            setIsTrollMode(Math.random() < 0.5);
        }
    }, [modalIsOpen]);

    return <Modal
        title='Confirmação'
        isOpen={modalIsOpen}
        onConfirm={() => setModalIsOpen(false)}
        onClose={() => setModalIsOpen(false)}
        footer={{
            hidden: true
        }}
    >
        <div className={styles.content}>
            {activeMessage}
        </div>
        <div className={`${styles.custom_footer} ${isTrollMode ? styles['--troll_mode'] : ''}`}>
            <button
                className={`${styles['--cancel']} ${styles['--danger']}`}
                children='Cancelar'
            />
            <button
                className={`${styles['--confirm']} ${styles['--success']}`}
                children='Confirmar'
            />
        </div>
    </Modal>
}

export default ConfirmationModal;