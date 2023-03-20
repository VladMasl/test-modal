import { useCallback, useMemo, useState } from 'react';

type UseModalResult = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useModal = (initialState: boolean = false):UseModalResult => {
    const [isOpen, setOpen] = useState(initialState);

    const open = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    const close = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const result = useMemo(() => ({
        isOpen, open, close,
    }), [isOpen, open, close]);

    return result;
};
