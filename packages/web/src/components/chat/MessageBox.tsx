import React from "react";
import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";

export interface Props {
    username: string;
    content: string;
    createdAt: string;
};

const MessageBox: React.FC<Props> = ({ username, createdAt, content }) => {
    return (
        <>
            <HStack
                p="15px 0px"
                w="100%"
                alignItems="start"
            >
                <Avatar size="sm"/>
                <VStack
                    alignItems="start"
                    spacing="5px"
                >
                    <HStack
                    >
                        <Text color="brand.600" fontWeight="bold">{username}</Text>
                        <Text color="brand.300">·</Text>
                        <Text color="brand.300" fontSize="12px">{createdAt}</Text>
                    </HStack>
                    <Box
                        p="4px 8px"
                        borderRadius="0px 5px 5px 5px"
                        bg="brand.400"
                    >
                        <Text color="white">{content}</Text>
                    </Box>
                </VStack>
            </HStack>
        </>
    );
}

export default MessageBox;