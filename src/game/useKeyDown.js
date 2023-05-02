import { useEffect } from 'react';
const useKeyDown = (callback, keys) => {
    const onKeyDown = (event) => {
        const wasAnyKeyPressed = keys.some((key) => event.key === key) || keys.length == 0;
        if (wasAnyKeyPressed) {
            callback(event.key, event);
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
};

export default useKeyDown;