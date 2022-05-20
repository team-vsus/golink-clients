import { Box, Heading } from '@chakra-ui/react'
import { TableActions } from './TableActions'
import { TableContent } from './TableContent'
import MainWrapper from '../shared/MainWrapper';

export const CandidateList = () => {

    return (
        <MainWrapper>
            <Box as="section" py="12" margin="auto">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Box overflowX="auto">
                        <Heading size="lg" mb="6">
                            Candidates
                        </Heading>
                        <TableActions />
                        <TableContent />
                    </Box>
                </Box>
            </Box>
        </MainWrapper>
    )
}
