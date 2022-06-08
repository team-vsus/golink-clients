import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { useSelectedConv } from '../../store/useSelectedConv';
import MainWrapper from '../shared/MainWrapper';
import ChatArea from './ChatArea';
import Sidebar from './Sidebar';
import { useQueryClient } from 'react-query'
import { useSocket } from '../../store/useSocket';
import { useEffect } from 'react';
import { useAuth } from '@golink-clients/common';

const Chat: React.FC = () => {
    useAuth();
    const { selectedConv } = useSelectedConv();
    console.log(selectedConv);

    const queryClient = useQueryClient()
    const { connect, socket, disconnect } = useSocket();

    useEffect(() => {
        connect();
        console.log("Socket", socket);
        //socket?.on("message", console.log)
        //socket?.emit("df", JSON.stringify({ "message": "hello" }))

        return () => disconnect()
    }, []);

    const me = queryClient.getQueryData("me");
    console.log("Me", me)
    return (
        <MainWrapper>
            <Flex
                w="100%"
                h="100%"
            >
                <Sidebar />
                {selectedConv === null ? <Box flex="4"></Box> : <ChatArea />}
            </Flex>
        </MainWrapper>
    );
}

export default Chat;