import { Box, Button, Code, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useLogout, useMe } from '@golink-clients/common';
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@golink-clients/common';
import { useQueryClient } from 'react-query';
import Navbar from '../shared/Navbar';

export const Home = () => {
    useAuth();

    const queryClient = useQueryClient();
    const me = queryClient.getQueryData("me");
    const nav = useNavigate();
    const mutation = useLogout({ onSuccess: () => nav("/auth/login") });

    return (
        <Container>
            <Navbar />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;