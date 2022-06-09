import React, { useState, useEffect, useContext } from 'react';
import { Socket, io } from 'socket.io-client';
import Loader from './Loader';

export const SocketContext = React.createContext<Socket | null>(null);

export const SocketProvider: React.FC = ({ children }) => {

    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        if (socket) return;
        console.log("Connecting to ws server");
        const s = io("http://localhost:8000/", {
            withCredentials: true
        });
        setSocket(s);
        return () => {
            s.disconnect();
            setSocket(null);
        }
    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );

}

export const WaitForSocket: React.FC = ({ children }) => {
    const socket = useContext(SocketContext);

    if (!socket) {
        return <Loader />
    }
    return (
        <>{children}</>
    );
}