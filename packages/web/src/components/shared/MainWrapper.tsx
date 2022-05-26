import { Container } from "./Styles";
import Navbar from './Navbar';
import { useNavsize } from "../../store/useNavsize";
import { Box } from "@chakra-ui/react";

const MainWrapper: React.FC = ({ children }) => {
    const { isNavOpen } = useNavsize();
    return (
        <Container>
            <Navbar />
            <Box
                transition="all 200ms ease"
                ml={isNavOpen ? "220px" : "75px"}
                w="100%"
            >
                {children}
            </Box>
        </Container>
    )
}

export default MainWrapper;