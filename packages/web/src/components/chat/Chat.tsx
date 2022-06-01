import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { useSelectedConv } from '../../store/useSelectedConv';
import MainWrapper from '../shared/MainWrapper';
import ChatArea from './ChatArea';
import Sidebar from './Sidebar';

const Chat: React.FC = () => {
    const { selectedConv } = useSelectedConv();
    console.log(selectedConv);
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