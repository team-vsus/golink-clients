import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

type IndicatorCardProps = {
    bigT: string;
    smallT: string;
 
}
export const IndicatorCard: React.FC<IndicatorCardProps> = ({ bigT, smallT  })  => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="80px"
      minW="250px"
      borderRadius="2xl"
      bg="white"
      boxShadow="md"
      p={4}
    >
      <VStack alignItems="center" spacing="sm" mt="10px">
        <Heading
          fontSize="lg" 
        
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
        >
         {bigT}
        </Heading>
        <Text
          fontSize="md"
          
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
        ><strong>
          {smallT}
          </strong>
        </Text>
      </VStack>
    </Box>
  );
};