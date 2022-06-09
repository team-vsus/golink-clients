import { useContext } from "react";
import { SocketContext } from "../components/shared/SocketProvider";


export const useSocket = () => useContext(SocketContext);