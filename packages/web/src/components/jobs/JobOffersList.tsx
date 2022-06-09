import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { useAuth } from '@golink-clients/common';
import { DateTime } from 'luxon';
import { QueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
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
    const nav = useNavigate();
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
                            {query.data.map((job: JobAd, i: number) => (
                                <JobAdItem
                                    key={i}
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt={DateTime.fromJSDate(new Date(job.createdAt)).toLocaleString(DateTime.DATE_MED)}
                                    appliedCount={job.applicantsCounts ?? 0}
                                    jobType="Part Time"
                                    onClick={() => {
                                        nav(`/app/job-offers/${job.id}`);
                                    }}
                                />
                            ))}
                            {/*<JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />
                            <JobAdItem jobTitle='Front-end Developer (m/f)' location="Vienna, Austria" createdAt='Jun 31, 2018' appliedCount={4} jobType="Part Time" />*/}
                        </TabPanel>
                        <TabPanel p={0}>
                            {query.data.filter((j: JobAd) => j.open).map((job: JobAd, i: number) => (
                                <JobAdItem
                                    key={i}
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt={DateTime.fromJSDate(new Date(job.createdAt)).toLocaleString(DateTime.DATE_MED)}
                                    appliedCount={job.applicantsCounts ?? 0}
                                    jobType="Part Time"
                                    onClick={() => {
                                        nav(`/app/job-offers/${job.id}`);
                                    }}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel p={0}>
                            {query.data.filter((j: JobAd) => !j.open).map((job: JobAd, i: number) => (
                                <JobAdItem
                                    key={i}
                                    jobTitle={job.name}
                                    location={`${job.country}, ${job.city}`}
                                    createdAt={DateTime.fromJSDate(new Date(job.createdAt)).toLocaleString(DateTime.DATE_MED)}
                                    appliedCount={job.applicantsCounts ?? 0}
                                    jobType="Part Time"
                                    onClick={() => {
                                        nav(`/app/job-offers/${job.id}`);
                                    }}
                                />
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </MainWrapper>
    );
}

export default JobsView;