import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import JobsTopBar from "../shared/JobsTopBar";
import MainWrapper from '../shared/MainWrapper';
import { JobAdItem } from './JobOffersItem';

const JobsView: React.FC = () => {
    return (
        <MainWrapper>
            <Box p={4}>
                <JobsTopBar></JobsTopBar>
                <Text fontSize="3xl" fontWeight="bold" mt={4} color="brand.500">Jobs</Text>
                <Tabs colorScheme="brand">
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Open</Tab>
                        <Tab>Closed</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel p={0}>
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </MainWrapper>
    );
}

export default JobsView;