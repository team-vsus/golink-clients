import { Container } from '@chakra-ui/layout'
import MainWrapper from '../shared/MainWrapper'
import Navbar from '../shared/Navbar'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
import { Link } from "react-router-dom";
import { Button, Icon } from '@chakra-ui/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CandidateDetails = () => {
  return (
    <MainWrapper>
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" mt="12.5%" backgroundColor={"transparent"}>
      <Sidebar />
      <Content />
      <Link to="/app/candidates">
                                <Button>
                                    <Icon
                                        as={ArrowForwardIosIcon}
                                        fontSize="3xl"
                                    />
                                    </Button>
                                </Link>
    </Container>
    </MainWrapper>
  )
}
