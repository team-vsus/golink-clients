import { Box, Button, Code, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useLogout, useMe } from '@golink-clients/common';
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@golink-clients/common';
import { useQueryClient } from 'react-query';

export const Home = () => {
    useAuth();

    const queryClient = useQueryClient();
    const me = queryClient.getQueryData("me");
    const nav = useNavigate();
    const mutation = useLogout({ onSuccess: () => nav("/auth/login") });

    return (
        <Container>
            <Box h="100%" w="100%" bg="brand.500" alignItems="center" justifyContent="center" d="flex">
                <VStack>
                    <Text fontWeight="bold" color="white" fontSize="5xl">You are logged in!</Text>
                    <Code>
                        {JSON.stringify(me)}
                    </Code>
                    <Button colorScheme="brand" variant="outline" color="white" _hover={{ color: "brand.700" }} onClick={() => {
                        mutation.mutate();
                    }}>Logout</Button>
                </VStack>
            </Box>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;