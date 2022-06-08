import { Container } from "./Styles";
import Navbar from './Navbar';
import { useNavsize } from "../../store/useNavsize";
import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getCompany } from "../../api/company";

const MainWrapper: React.FC = ({ children }) => {
    const { isNavOpen } = useNavsize();
    useQuery("myCompany", getCompany);
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