import { useEffect } from 'react';
const useKeyPress = (callback, keys) => {
    const onKeyPress = (event) => {
        const wasAnyKeyPressed = keys.some((key) => event.key === key) || keys.length == 0;
        if (wasAnyKeyPressed) {
            callback(event.key, event);
        }
    };
    useEffect(() => {
        document.addEventListener('keypress', onKeyPress);
        return () => {
            document.removeEventListener('keypress', onKeyPress);
        };
    }, [onKeyPress]);
};

export default useKeyPress;