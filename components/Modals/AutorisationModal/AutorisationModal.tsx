import React, {FC} from 'react';
import cn from 'classnames';
import styles from './AutorisationModal.module.scss';
import {OverLayingModal} from '../../common/OverLayingModal';
import {ModalProps} from '../../common/OverLayingModal/modalProps';


export const AutorisationModal: FC<ModalProps> = (
    {
        className,
        onClose,
        isOpen,
    }) => {


    return (
        <OverLayingModal isOpen={isOpen} onClose={onClose} className={styles.modal}>
            <div className={cn(styles.root, className)}>
                <h1>AutorisationModal</h1>
            </div>
        </OverLayingModal>
    );
};