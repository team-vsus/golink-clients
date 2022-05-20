import { Button, Flex, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { Add, Notifications, Search } from "@mui/icons-material";


const JobsTopBar: React.FC = () => {
    return (
        <Flex
            justifyContent="space-between"
            w="100%"
        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={Search} color="brand.100" />}
                />
                <Input variant='filled' placeholder='Search for jobs' width="25%" />
            </InputGroup>

            <Flex
                alignItems="center"
            >
                <Icon as={Notifications} color="brand.100" mr={4} />

                <Button leftIcon={<Add />} colorScheme='brand' variant='solid'>
                    Create job
                </Button>
            </Flex>
        </Flex>
    );
}

export default JobsTopBar;