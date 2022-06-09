import { Text, Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue as mode } from '@chakra-ui/react'

import { TableActions } from './TableActions'
import { TableContent } from './TableContent'
import MainWrapper from '../shared/MainWrapper';
import { useAuth } from '@golink-clients/common';
import { Search } from 'react-feather';
import { columns, data } from './testdata';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';

export const CandidateList = () => {
    useAuth();

    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <MainWrapper>
            <Box as="section" py="12" margin="auto">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Box overflowX="auto">
                        <Heading size="lg" mb="6">
                            <Text fontSize="3xl" fontWeight="bold" color="brand.500">Candidates</Text>
                        </Heading>

                        {/*<TableActions />
                        <TableContent />*/}

                        <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
                            <HStack w="100%">
                                <FormControl overflow-x="hidden" id="search">
                                    <InputGroup size="sm">
                                        <FormLabel srOnly>Filter by name or email</FormLabel>
                                        <InputLeftElement pointerEvents="none" color="gray.400">
                                            <Icon
                                                as={Search}
                                                fontSize="1.25em"
                                            />
                                        </InputLeftElement>
                                        <Input rounded="base" type="search" placeholder="Filter by name or email..." onChange={handleChange} value={search} />
                                    </InputGroup>
                                </FormControl>
                            </HStack>
                        </Stack>

                        <Box>
                            <Table my="7" borderWidth="1px" fontSize="sm">
                                <Thead bg={mode('brand.500', 'brand.50')}>
                                    <Tr>
                                        {columns.map((column, index) => (
                                            <Th whiteSpace="nowrap" scope="col" key={index} color="brand.50">
                                                {column.Header}
                                            </Th>
                                        ))}
                                        <Th />
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.filter(u => u.user.name.includes(search)).map((row, index) => (
                                        <Tr key={index}>
                                            {columns.map((column, index) => {
                                                const cell = row[column.accessor as keyof typeof row]
                                                const element = column.Cell?.(cell) ?? cell
                                                return (
                                                    <Td whiteSpace="nowrap" key={index}>
                                                        {element}
                                                    </Td>
                                                )
                                            })}
                                            <Td textAlign="right">
                                                <Button variant="link" colorScheme="black">
                                                    <Icon
                                                        as={ArrowForwardIosIcon}
                                                        fontSize="3xl"
                                                    />
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Flex align="center" justify="space-between">
                                <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
                                    {data.length} members
                                </Text>
                                <Box display="flex" flexDir={"column"} my="2">
                                    <Text color={mode('gray.600', 'gray.400')} fontSize="sm">

                                    </Text>
                                    <ButtonGroup variant="outline" size="sm">

                                        <Button as="a" rel="prev">
                                            Previous
                                        </Button>
                                        <Button as="a" rel="next">
                                            Next
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </MainWrapper>
    )
}
