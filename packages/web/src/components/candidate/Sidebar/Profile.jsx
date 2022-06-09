import {
  Avatar,
  Heading,
  VStack,
} from '@chakra-ui/react'

function Profile() {



  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.dark">
      <Avatar
        size="2xl"
        name="Murat Amat"
        cursor="pointer"
        src="https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless"
      >
       
      </Avatar>
     
  
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          Murat Amat
        </Heading>
       
      </VStack>
    </VStack>
  )
}

export default Profile
