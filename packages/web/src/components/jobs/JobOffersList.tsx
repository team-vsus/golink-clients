import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { useAuth } from '@golink-clients/common';
import { useJobOffers } from '../../api/joboffers';
import { useGlobalData } from '../../store/useGlobalData';
import { JobAd } from '../../types';
import JobsTopBar from "../shared/JobsTopBar";
import Loader from '../shared/Loader';
import MainWrapper from '../shared/MainWrapper';
import { JobAdItem } from './JobOffersItem';

const JobsView: React.FC = () => {
    useAuth();
    //const { jobs } = useGlobalData();
    const query = useJobOffers();
    console.log("Daata", query.data);
    if (query.isLoading) {
        return <Loader />;
    }
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
                            {query.data.map((job: JobAd) => (
                                <JobAdItem
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt={job.createdAt}
                                    appliedCount={job.applicantsCounts ?? 0}
                                    jobType="Part Time" />
                            ))}
                            {/*<JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />*/}
                        </TabPanel>
                        <TabPanel p={0}>
                            {query.data.filter((j: JobAd) => j.open).map((job: JobAd) => (
                                <JobAdItem
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt={job.createdAt}
                                    appliedCount={0}
                                    jobType="Part Time" />
                            ))}
                        </TabPanel>
                        <TabPanel p={0}>
                            {query.data.filter((j: JobAd) => !j.open).map((job: JobAd) => (
                                <JobAdItem
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt='Jun 31, 2018'
                                    appliedCount={0}
                                    jobType="Part Time" />
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </MainWrapper>
    );
}

export default JobsView;