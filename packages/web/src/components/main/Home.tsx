import styled from '@emotion/styled';
import { useLogout, useMe } from '@golink-clients/common';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@golink-clients/common';
import { useQueryClient } from 'react-query';
import Navbar from '../shared/Navbar';
import JobsView from '../jobs/JobsView';
import { JobAdView } from '../jobs/JobAdView';

export const Home = () => {
    useAuth();

    const queryClient = useQueryClient();
    const me = queryClient.getQueryData("me");
    const nav = useNavigate();
    const mutation = useLogout({ onSuccess: () => nav("/auth/login") });
    const location = useLocation();

    return (
        <Container>
            <Navbar />
            <JobsView />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;