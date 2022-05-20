import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex, Text, Icon, IconButton } from '@chakra-ui/react';
import JobsTopBar from "../shared/JobsTopBar";
import PipeLine from './Pipeline';
import { ArrowLeft } from '@mui/icons-material';

export const JobAdView: React.FC = () => {
    return (
        <main>
            <Box p={4}>
                <JobsTopBar></JobsTopBar>
                <Flex alignItems="center" mt={5}>
                    <IconButton aria-label='Go back' icon={<Icon as={ArrowLeft} color="brand.400" />} />
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
                            <PipeLine />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </main>
    );
}