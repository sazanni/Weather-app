import { useEffect, useRef } from 'react';

function useDebounce<T extends (...args: any[]) => void>(
    func: any,
    delay: number
): (...args: Parameters<T>) => void {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedFunction = (...args: Parameters<T>) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return debouncedFunction;
}

export default useDebounce;
