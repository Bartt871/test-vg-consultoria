import { Modal } from "@/components/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from './style.module.scss';

/**
 * 
 * Nessa atividade decidi apresentar um pouco como
 * é minha forma pessoal de trabalhar, para que assim
 * possam conhecer um pouco melhor meu trabalho
 */

const messages = [
    'Pense bem! O botão de voltar não funciona aqui...',
    'Tem certeza? Porque uma vez feito, só um mago pode desfazer!',
    'Se eu fosse você, eu pensaria duas vezes...',
    'Tem certeza? Talvez esteja prestes a criar uma lenda!',
    'Vai lá! Mas, cuidado, o universo está observando...',
    'Não dá pra desfazer isso, mas nada que uma viagem no tempo não resolva!'
];

const ConfirmationModal = ({
    modalIsOpen,
    setModalIsOpen
}: {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [activeMessage, setActiveMessage] = useState<string>();

    useEffect(() => {
        if (modalIsOpen) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setActiveMessage(randomMessage);
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
        <div className={styles.custom_footer}>
            <button
                className={`${styles['--cancel']} ${styles['--danger']}`}
                onClick={() => setModalIsOpen(false)}
                children='Cancelar'
            />
            <button
                className={`${styles['--confirm']} ${styles['--success']}`}
                onClick={() => setModalIsOpen(false)}
                children='Confirmar'
            />
        </div>
    </Modal>
}

export default ConfirmationModal;