import {
    FormControl,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Icon,
} from '@chakra-ui/react'
import { Search } from '@mui/icons-material';

export const TableActions = () => {
    return (
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between">
            <HStack>
                <FormControl minW={{ md: '60vw' }} overflow-x="hidden" id="search">
                    <InputGroup size="sm">
                        <FormLabel srOnly>Filter by name or email</FormLabel>
                        <InputLeftElement pointerEvents="none" color="gray.400">
                            <Icon
                                as={Search}
                                fontSize="1.25em"
                            />
                        </InputLeftElement>
                        <Input rounded="base" type="search" placeholder="Filter by name or email..." />
                    </InputGroup>
                </FormControl>
            </HStack>
        </Stack>
    )
}
