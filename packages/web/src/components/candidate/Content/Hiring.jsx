import { Button, Box, FormLabel, Heading, VStack ,Text} from '@chakra-ui/react'

function Hiring() {
  return (
    <Box
      display="flex"
      alignItems="right"
      justifyContent="space-between"
    >
      <VStack alignItems="left" spacing="sm" >
      <Text fontSize="xl"><strong> Short Description:</strong></Text>
      <Text> Hi Im Murat Amat and Im trying to get my act together</Text> 
      <Text fontSize="xl"><strong> Skills:</strong></Text>
      <VStack>
      <Text> React</Text>
      <Text> Node</Text>
      <Text> MongoDB</Text>
      </VStack>
      <Text fontSize="xl"><strong> Experience:</strong></Text>
      <Text> 2 years</Text>
      <Text fontSize="xl"><strong> Education:</strong></Text>
      <Text> BSc in Computer Science</Text>
      <Text fontSize="xl"><strong> Location:</strong></Text>
      <Text> London</Text>

      </VStack>
      
    
   
    </Box>
  )
}

export default Hiring
