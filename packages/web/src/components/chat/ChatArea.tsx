import { Box, Flex, VStack, Text, Avatar, Button } from '@chakra-ui/react';
import { Input, InputProps } from '@chakra-ui/input';
import React from 'react';
import { Smile } from 'react-feather';
import MessageBox from './MessageBox';
import { scrollbarStyles } from '../../utils/scrollbarStyles';

const ChatArea: React.FC = () => {

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
                    <Text fontSize="xl" fontWeight="bold" color="brand.500" ml={4}>Max Mustermann</Text>
                </Flex>
                <Button colorScheme="brand" variant="outline">View Candidate</Button>
            </Flex>
            <Box
                bg="white"
                margin="5px"
                overflow="hidden"
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
                        {Array.from(Array(10).keys()).map((_, i) => <MessageBox key={i} username={"Max Mustermann"} createdAt={"23. May"} content={"test"} />)}
                    </VStack>

                    <ChatInput />
                </Flex>
            </Box>
        </Flex>
    );
}

const ChatInput = () => {
    const [value, setValue] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <>
            <Flex
                flex="1"
                alignItems="center"
                w="100%"
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