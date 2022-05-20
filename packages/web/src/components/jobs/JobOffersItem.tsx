import { Box, Flex, Button, Text } from "@chakra-ui/react";

type Props = {
    jobTitle: string;
    location: string;
    createdAt: string;
    appliedCount: number;
    jobType: string;
}
export const JobAdItem: React.FC<Props> = ({ jobTitle, location, createdAt, appliedCount, jobType }) => {
    return (
        <Box
            transition="200ms ease"
            sx={{
                "_hover": {
                    cursor: 'pointer',
                    border: "2px solid #7A8AB3",
                }
            }}
            border="2px solid #D2D7E5"
            borderRadius="5px"
            bg="brand.50"
            mt={4}
        >
            <Flex
                p={4}
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex flexDirection="column">
                    <Text fontSize="2xl" color="brand.400">{jobTitle}</Text>
                    <Text fontSize="sm" color="brand.200">{location}</Text>
                </Flex>

                <Text color="brand.200">{createdAt}</Text>
                <Text color="brand.200">{appliedCount}</Text>
                <Text color="brand.200">{jobType}</Text>
                <Button variant="solid" colorScheme="brand">View details</Button>
            </Flex>

        </Box>
    );
}