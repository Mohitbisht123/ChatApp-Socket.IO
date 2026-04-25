import { createContext, useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthProvider";

export const socketContext = createContext();

// custom hook
export const useSocketContext = () => {
    return useContext(socketContext);
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser] = useAuth();

    useEffect(() => {
        if (!authUser) return;

        const newSocket = io("http://localhost:4002", {
            query: {
                userId: authUser.user._id,
            },
        });

        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (users) => {
            setOnlineUsers(users);
        });

        // cleanup
        return () => {
            newSocket.off("getOnlineUsers");
            newSocket.close();
        };
    }, [authUser]);

    return (
        <socketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </socketContext.Provider>
    );
};