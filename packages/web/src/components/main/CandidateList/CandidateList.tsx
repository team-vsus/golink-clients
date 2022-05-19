import styled from '@emotion/styled';
import { useLogout, useMe } from '@golink-clients/common';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@golink-clients/common';
import { useQueryClient } from 'react-query';
import Navbar from '../../shared/Navbar';
import { LinkItem } from '../../../types';
import { Dashboard, PeopleAlt, Work, Chat } from '@mui/icons-material';
import { Box, Heading } from '@chakra-ui/react'
import { TableActions } from './TableActions'
import { TableContent } from './TableContent'


  
    
  
export const CandidateList = () => {
    useAuth();

    const queryClient = useQueryClient();
    const me = queryClient.getQueryData("me");
    const nav = useNavigate();
    const mutation = useLogout({ onSuccess: () => nav("/auth/login") });

    const linkItems: LinkItem[] = [
        { title: "Dashboard", icon: Dashboard, to: "/app/" },
        { title: "Job-Offers", icon: Work, to: "/app/job-offers" },
        { title: "Candidates", icon: PeopleAlt, to: "/app/candidates" },
        { title: "Chat", icon: Chat, to: "/app/chat" },
    ];

    return (
        <Container>
        
        <Navbar linkItems={linkItems} />
        
        <Box as="section" py="12" margin="auto">
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
            <Box overflowX="auto">
              <Heading size="lg" mb="6">
                Candidates
              </Heading>
              <TableActions />
              <TableContent />
            </Box>
          </Box>
        </Box>
        </Container>
      )
    }
    


const Container = styled.div`
    display: flex;
    flex-direction: row
    height: 100%;
    width: 100%;
`;