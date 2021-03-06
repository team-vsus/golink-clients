import { Flex, VStack, Text, Icon, Input, InputGroup, InputLeftElement, Avatar, Box } from '@chakra-ui/react';
import React from 'react';
import { Search } from 'react-feather';
import { useQuery } from 'react-query';
import { getChannels } from '../../api/channels';
import { useGlobalData } from '../../store/useGlobalData';
import { useSelectedConv } from '../../store/useSelectedConv';
import { Conversation } from '../../types';
import Loader from '../shared/Loader';

const Sidebar: React.FC = () => {

    //const { conversations } = useGlobalData();
    const channelQuery = useQuery("channels", getChannels);

    if (channelQuery.isLoading) return <Loader />

    return (
        <VStack
            borderRightColor="brand.200"
            borderRightWidth="1px"
            alignItems="flex-start"
            w="100%"
            h="100%"
            flex="1"
            p={4}
        >
            <Text fontSize="3xl" fontWeight="bold" color="brand.500">Messages</Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={Search} color="brand.100" />}
                />
                <Input variant='filled' placeholder='Search' />
            </InputGroup>
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Text textTransform="uppercase" color="brand.300" fontSize="14px" fontWeight="bold">All Messages</Text>
            </Flex>

            {(channelQuery.data as any).map((c: any, i: number) => (
                <Convo
                    key={i}
                    conv={c}
                    lastSentText=''
                    newMessagesCount={0}
                />
            ))}

            {/*<Conversation firstname='Max' lastname='Mustermann' lastSentText='Thank you' newMessagesCount={0} />
            <Conversation firstname='Max' lastname='Mustermann' lastSentText='Thank you' newMessagesCount={0} />
            <Conversation firstname='Max' lastname='Mustermann' lastSentText='Thank you' newMessagesCount={0} />*/}
        </VStack>
    );
}

type ConversationProps = {
    conv: Conversation;
    lastSentText: string;
    newMessagesCount: number;
}

const Convo: React.FC<ConversationProps> = ({ conv, lastSentText, newMessagesCount }) => {
    const { selectConv } = useSelectedConv();
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            transition="all 200ms ease"
            _hover={{
                cursor: 'pointer',
                bgColor: 'brand.50',
            }}
            borderRadius={5}
            padding="12px 6px"
            onClick={() => {
                selectConv(conv);
            }}
        >
            <Flex>
                <Avatar />
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    ml={4}
                >
                    <Text fontWeight="bold" color="brand.600">{`${(conv as any).firstname} ${(conv as any).lastname}`}</Text>
                    <Text fontSize="14px" color="brand.200">{lastSentText}</Text>
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Text fontSize="14px" color="brand.400">23:23</Text>
                {newMessagesCount > 0 &&
                    <Box
                        w="16px"
                        h="16px"
                        borderRadius="100%"
                        bg="red"
                        textAlign="center"
                    >
                        <Text color="white" fontSize="10px" fontWeight="bold">{newMessagesCount}</Text>
                    </Box>
                }

            </Flex>
        </Flex>
    );
}

export default Sidebar;