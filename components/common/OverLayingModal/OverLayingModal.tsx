import React, {ReactNode, useEffect, useCallback} from "react";
import cn from 'classnames';
import styles from './OverLayingModal.module.scss'
import {Portal} from "../Portal";
import {ModalProps} from "./modalProps";


interface OverLayingModalProps extends ModalProps {
    children?: ReactNode;
    className?: string;
}

export const OverLayingModal = ({
                                    isOpen,
                                    children,
                                    onClose,
                                    className
                                }: OverLayingModalProps) => {

    const contentClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    const hendlerClose = useCallback(() => {
        if (onClose) {

            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            hendlerClose();
        }
    }, [hendlerClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keyup', onKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
        }
        return () => {
            window.removeEventListener('keyup', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const cls = cn(
        styles.root,
        {
            [styles.opened]: isOpen,

        })

    return (
        <Portal>
            <div className={cls}>
                <div className={styles.overlay} onMouseDown={hendlerClose}>
                    <div className={cn(styles.content, className)} onMouseDown={contentClickHandler}>
                        <button className={styles.btn} onMouseDown={hendlerClose}>&#5741;</button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
}