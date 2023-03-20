import {FC, ReactNode, useState, useRef, useEffect} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
    const {children} = props;
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        ref.current = document.querySelector<HTMLElement | undefined>('#portal');
        setMounted(true);
    }, [])
    return (mounted && ref.current) ? createPortal(children, ref.current) : null;
}