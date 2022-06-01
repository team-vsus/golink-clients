import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import MainWrapper from '../shared/MainWrapper';

const Settings: React.FC = () => {
    return (
        <MainWrapper>
            <Flex
                h="100%"
            >
                <VStack
                    flex="1"
                    w="100%"
                    p="10px 5px"
                >
                    <Flex
                        alignItems="center"
                        w="100%"
                        p="5px 10px"
                        _hover={{
                            cursor: 'pointer',
                            bg: 'brand.100',
                            borderRadius: '5px'
                        }}
                    >
                        <Text>Invite</Text>
                    </Flex>

                    <Flex
                        alignItems="center"
                        w="100%"
                        p="5px 10px"
                        _hover={{
                            cursor: 'pointer',
                            bg: 'brand.100',
                            borderRadius: '5px'
                        }}
                    >
                        <Text>Invite</Text>
                    </Flex>
                </VStack>
                <Box
                    flex="6"
                    bg="brand.50"
                    w="100%"
                    h="100%"
                    minH="500px"
                >

                </Box>
            </Flex>
        </MainWrapper>
    );
}

export default Settings;