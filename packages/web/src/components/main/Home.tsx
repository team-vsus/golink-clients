import { Box, Code, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
    const { user } = useAuth();
    return (
        <Container>
            <Box h="100%" w="100%" bg="brand.500" alignItems="center" justifyContent="center" d="flex">
                <VStack>
                    <Text fontWeight="bold" color="white" fontSize="5xl">You are logged in!</Text>
                    <Code>{JSON.stringify(user, null, 2)}</Code>
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