import { Flex, VStack, Text, Box, Button, HStack, useDisclosure } from '@chakra-ui/react';
import { useAuth } from '@golink-clients/common';
import React from 'react';
import { useGlobalData } from '../../store/useGlobalData';
import MainWrapper from '../shared/MainWrapper';
import ApplicationModal from './ApplicationModal';
import CreateApplicationModal from './CreateApplicationModal';

const Settings: React.FC = () => {
    useAuth();
    const { applications } = useGlobalData()
    const applicationDisclosure = useDisclosure();
    const createAppDisclosure = useDisclosure();
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
                        bg="brand.100"
                        borderRadius='5px'
                    >
                        <Text>Social Media</Text>
                    </Flex>
                </VStack>
                <Box
                    flex="6"
                    bg="brand.50"
                    w="100%"
                    h="100%"
                    minH="500px"
                    p={4}
                >
                    <Button colorScheme="brand" onClick={createAppDisclosure.onOpen}
                    >Add Social media</Button>
                    <HStack spacing={5} mt={4}>
                        {applications.map(app => (
                            <Box
                                w="100px"
                                h="100px"
                                bg="brand.200"
                                borderRadius="5px"
                                d="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{
                                    cursor: 'pointer'
                                }}
                                onClick={applicationDisclosure.onOpen}
                            >
                                <Text color="white">{app.name}</Text>
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Flex>

            <ApplicationModal disclosure={applicationDisclosure} />
            <CreateApplicationModal disclosure={createAppDisclosure} />
        </MainWrapper>
    );
}

export default Settings;