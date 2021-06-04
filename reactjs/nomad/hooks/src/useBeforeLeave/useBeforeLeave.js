import {useEffect} from "react";

export const useBeforLeave = (onBefore) => {
    const handle = (e) => {
        const {clientY} = e;
        if (clientY <= 0) onBefore();
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}