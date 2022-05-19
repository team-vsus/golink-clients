import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  useColorModeValue as mode,
  Box,
  Flex,
  Text,
  ButtonGroup,
} from '@chakra-ui/react'
import * as React from 'react'
import { columns, data } from './testdata'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const TableContent = () => {
  return (
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
        {data.map((row, index) => (
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
  )
}
