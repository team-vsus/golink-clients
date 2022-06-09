import { Box, Flex, VStack, Text, Avatar, Button } from '@chakra-ui/react';
import { Input, InputProps } from '@chakra-ui/input';
import React from 'react';
import { Smile } from 'react-feather';
import MessageBox from './MessageBox';
import { scrollbarStyles } from '../../utils/scrollbarStyles';
import { useSelectedConv } from '../../store/useSelectedConv';
import { genId } from '../../utils/utils';
import { useGlobalData } from '../../store/useGlobalData';
import { DateTime } from 'luxon';
import { getMessagesByChannel, useCreateMessage } from '../../api/channels';
import { useQuery, useQueryClient } from 'react-query';
import Loader from '../shared/Loader';
import { useAlerts } from '../../store/useAlerts';

const ChatArea: React.FC = () => {
    const { selectedConv } = useSelectedConv();
    console.log("Selected Conv", selectedConv);
    const queryClient = useQueryClient();
    const me: any = queryClient.getQueryData("me");
    const messageQuery = useQuery(["messages", selectedConv?.id], () => getMessagesByChannel(selectedConv!.id), {
        retry: false
    });

    if (messageQuery.isLoading) {
        return <Loader />
    }

    console.log("DATA", messageQuery);

    return (
        <Flex
            flex="4"
            flexDirection="column"
        >
            <Flex
                p="25px 20px"
                justifyContent="space-between"
                alignItems="center"
                borderBottomColor="brand.200"
                borderBottomWidth="1px"
            >
                <Flex
                    w="100%"
                    alignItems="center"
                >
                    <Avatar />
                    <Text fontSize="xl" fontWeight="bold" color="brand.500" ml={4}>{`${(selectedConv as any).firstname} ${(selectedConv as any).lastname}`}</Text>
                </Flex>
                <Button colorScheme="brand" variant="outline">View Candidate</Button>
            </Flex>
            <Box
                bg="white"
                margin="5px"
                overflow="hidden"
                h="100%"
            >
                <Flex flexDirection="column" p="0 15px" h="100%">
                    <VStack
                        spacing="0"
                        flex="10"
                        overflow="auto"
                        sx={{
                            ...scrollbarStyles,
                        }}
                    >
                        {/*Array.from(Array(10).keys()).map((_, i) => <MessageBox key={i} username={"Max Mustermann"} createdAt={"23. May"} content={"test"} />)*/}
                        {!messageQuery.isError && messageQuery.data.map((m: any, i: number) => {
                            if (m.sender_id === me.id)
                                return (<MessageBox key={i} username={`${me.firstname} ${me.lastname}`} createdAt={m.date} content={m.content} />)
                            return (<MessageBox key={i} username={`${(selectedConv! as any).firstname} ${(selectedConv! as any).lastname}`} createdAt={m.date} content={m.content} />)
                        })}
                    </VStack>

                    <ChatInput />
                </Flex>
            </Box>
        </Flex>
    );
}

const ChatInput = () => {
    const [value, setValue] = React.useState("");
    const queryClient = useQueryClient();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const messageMutation = useCreateMessage({
        onMutate: (msg) => {
            queryClient.cancelQueries("messages");

            const snapshot = queryClient.getQueryData<any>("messages");

            snapshot && queryClient.setQueryData<any>("messages", (prev: any) => (
                [...[...snapshot, { ...msg, id: Date.now() }]]
            ));

            return { snapshot };
        },
        onError: (_, __, context: any) => {
            if (context?.snapshot) {
                queryClient.setQueryData<any[]>('messages', context.snapshot);
            }
        },
        onSettled: () => queryClient.invalidateQueries("messages"),
    });

    const { selectedConv } = useSelectedConv();

    return (
        <>
            <Flex
                flex="1"
                alignItems="center"
                w="100%"
                mt="auto"
            >
                <Box w="100%">
                    <Box
                        bg="brand.300"
                        borderRadius="5px"
                        d="flex"
                        alignItems="center"
                        w="100%"
                        p="0px 10px"
                        sx={{
                            "& > div[role=textbox]": {
                                width: '100%'
                            }
                        }}
                    >
                        <FormInput
                            value={value}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === "Enter" && value !== "") {
                                    messageMutation.mutate({
                                        id: Date.now(),
                                        content: value,
                                        firstname: "Max",
                                        lastname: "Muster",
                                        date: new Date().toString(),
                                        channel_id: selectedConv?.id
                                    } as any);
                                    console.log()
                                    /*addMessage(selectedConv?.id!, {
                                        id: Date.now(),
                                        content: value,
                                        date: DateTime.now().toLocaleString(DateTime.DATE_MED),
                                        firstname: 'Murat',
                                        lastname: 'Ahmed',
                                    })*/
                                    setValue("");
                                }
                            }}
                            onChange={handleChange}
                            placeholder="Enter a Text"
                        />
                        <Flex>
                            <Smile color="white" />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}

const FormInput: React.FC<InputProps> = (props) => {
    return (
        <Input {...props} outline="none" boxShadow="none" border="none" bg="transparent" color="var(--text-primary)" focusBorderColor="transparent"
            sx={{
                "&::-webkit-input-placeholder": {
                    color: 'white'
                }
            }}
        />
    )
}
export default ChatArea;