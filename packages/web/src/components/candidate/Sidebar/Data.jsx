  import { Box, Stack, Text, VStack,Divider } from '@chakra-ui/react'

  const list = [
    {
      id: 1,
      name: 'Opportunities won',
      value: 26,
      color: 'green',
    },
    {
      id: 2,
      name: 'Current opportunities',
      value: 6,
      color: 'cadet',
    },
  ]

  function Data() {
    return (
      
      <VStack as="ul" spacing={0} listStyleType="none">
      <Box w="full" h="10vh" borderColor="brand.dark" background="brand.400">
      <Stack direction={"row"} style={{justifyContent: "space-between" }} >
      <Text color="brand.50" text-align="left" py="3" px="5"  style={{textAlign: "left"}}>Applied Jobs</Text> <Text color="brand.50" px="5"  py="3"style={{textAlign: "right"}} text-align="right" >5 Days ago</Text>
      </Stack>
      <Divider />
      <Text color="brand.50" pt="3" style={{textAlign: "center"}}>Full Stack Dev</Text>
      </Box>
      
      </VStack>
    )
  }

  export default Data
