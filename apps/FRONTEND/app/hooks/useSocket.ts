// import { WS_URL } from "@/config";
// import { useEffect, useState } from "react";

// export function useSocket () {
//     const [loading , setLoading] = useState(true);
//     const [socket , setSocket] = useState<WebSocket>();

//     useEffect(() => {
//         const ws = new WebSocket(WS_URL);

//         ws.onopen = () => {
//             setLoading(false);
//             setSocket(ws)
//         }
//     }, [])

//     return {
//         socket,
//         loading
//     }
// }

// useSocket.ts

import { useEffect, useRef, useState } from "react";

export function useSocket() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [loading, setLoading] = useState(true);
    const listeners = useRef<((data: any) => void)[]>([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);

        ws.onopen = () => {
            setLoading(false);
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            listeners.current.forEach((fn) => fn(data));
        };

        return () => {
            ws.close();
        };
    }, []);

    const addListener = (fn: (data: any) => void) => {
        listeners.current.push(fn);
        return () => {
            listeners.current = listeners.current.filter((f) => f !== fn);
        };
    };

    return { socket, loading, addListener };
}
