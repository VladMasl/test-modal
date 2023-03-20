import React, {FC} from 'react';
import cn from 'classnames';
import styles from './RegisterationModal.module.scss';
import {OverLayingModal} from '../../common/OverLayingModal';
import {ModalProps} from '../../common/OverLayingModal/modalProps';


export const RegisterationModal: FC<ModalProps> = (
    {
        className,
        onClose,
        isOpen,
    }) => {


    return (
        <OverLayingModal isOpen={isOpen} onClose={onClose} className={styles.modal}>
            <div className={cn(styles.root, className)}>
                <h1>RegisterationModal</h1>
            </div>
        </OverLayingModal>
    );
};