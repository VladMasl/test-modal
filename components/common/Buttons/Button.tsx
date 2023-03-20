import React, {FC, MouseEventHandler, ReactNode} from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({className, onClick, children}) => {

    const handlerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (onClick) {
            onClick(event)
        }
    }
    return (
        <button onClick={handlerClick} className={cn(styles.root, className)}>
            {children}
        </button>
    );
};