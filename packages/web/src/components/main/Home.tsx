import React from 'react';
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { IndicatorCard } from '../main/IndicatorCard';

import { useRef } from 'react';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useAuth } from '@golink-clients/common';
import { useQuery } from 'react-query';
import { getCompany } from '../../api/company';
import MainWrapper from '../shared/MainWrapper';

export const Home = () => {
    useAuth();
  document.title = 'Chakra Admin - Dashboard';

  const { colorMode } = useColorMode();

  const barChartRef = useRef<HTMLCanvasElement>(null) as any;
  const pieChartRef = useRef<HTMLCanvasElement>(null) as any;
  const lineChartRef = useRef<HTMLCanvasElement>(null) as any;

  const buildCharts = () => {
    new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['04.06', '05.06', '06.06', '07.06', '08.06', '09.06'],
        datasets: [
          {
            label: '# of registered users',
            data: [1, 2, 3, 5, 2, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: ['04.06', '05.06', '06.06', '07.06', '08.06', '09.06'],
        datasets: [
          {
            label: '# of registered users',
            data: [1, 2, 3, 5, 2, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {

        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(lineChartRef.current, {
      type: 'line',
      data: {
        labels: ['04.06', '05.06', '06.06', '07.06', '08.06', '09.06'],
        datasets: [
          {
            label: '# of registered users',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (barChartRef.current) {
      buildCharts();
    }
  }, []);

  return (
      <MainWrapper >
    <Box
      w="full"
      h="full"
      ml="100px"
      overflow="hidden"
      overflowY="auto"
     
      p={4}
     
    >
      <HStack justifyContent="space-between" mb="20px">
        <Heading
          fontSize="xl"
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
          
        >
          Dashboard
        </Heading>
        <Button size="sm">
          <HStack spacing="5px">
            
            <Text>Filters</Text>
          </HStack>
        </Button>
      </HStack>

      <Grid
        gap="4"
        w="full"
        templateRows="auto auto"
        alignItems="unset"
        spacing="4"
      >
        <Grid gap="40" templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
          <IndicatorCard bigT="Number of Candidates" smallT="15"/>
          <IndicatorCard bigT="Number of JobAds" smallT="4" />
          <IndicatorCard bigT="Number of connected Social Medias" smallT="1"/>
        </Grid>

        <Grid gap="4" templateColumns="repeat(auto-fill, minmax(350px, 1fr))" mt="2rem">
          <Box
            borderRadius="2xl"
            bg="white"
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={barChartRef} width="400" height="400" />
          </Box>
          <Box
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={pieChartRef} width="400" height="400" />
          </Box>
          <Box
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={lineChartRef} width="400" height="400" />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </MainWrapper>
  );
};