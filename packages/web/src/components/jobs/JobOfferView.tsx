import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex, Text, Icon, IconButton } from '@chakra-ui/react';
import JobsTopBar from "../shared/JobsTopBar";
import Pipeline from './Pipeline';
import { ArrowLeft } from '@mui/icons-material';
import MainWrapper from '../shared/MainWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@golink-clients/common';

export const JobOfferView: React.FC = () => {
    useAuth();
    const params = useParams();
    const nav = useNavigate();

    return (
        <MainWrapper>
            <Box p={4}>
                <JobsTopBar></JobsTopBar>
                <Flex alignItems="center" mt={5}>
                    <IconButton aria-label='Go back' icon={<Icon as={ArrowLeft} color="brand.400" />} onClick={() => {nav("/app/job-offers")}} />
                    <Flex flexDirection="column" ml={4}>
                        <Text fontSize="2xl" color="brand.400" fontWeight="bold" >UI Designer</Text>
                        <Text fontSize="sm" color="brand.200">Vienna, Austria</Text>
                    </Flex>
                </Flex>
                <Tabs colorScheme="brand" mt={4}>
                    <TabList>
                        <Tab>Candidate list</Tab>
                        <Tab>Pipeline</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <Pipeline />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </MainWrapper>
    );
}