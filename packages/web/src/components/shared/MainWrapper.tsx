import { Container } from "./Styles";
import Navbar from './Navbar';
import { useNavsize } from "../../store/useNavsize";
import { Box } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "react-query";
import { getCompany } from "../../api/company";
import Loader from '../shared/Loader';
import { useNavigate } from "react-router-dom";

const MainWrapper: React.FC = ({ children }) => {
    const { isNavOpen } = useNavsize();
    const queryClient = useQueryClient();
    const me: any = queryClient.getQueryData("me");
    const nav = useNavigate();
    if (!me) {
        console.log("ME");
        nav("/auth/login")
    }
    const query = useQuery("myCompany", getCompany);
    if (query.isLoading) return <Loader />;
    return (
        <Container>
            <Navbar />
            <Box
                transition="all 200ms ease"
                ml={isNavOpen ? "220px" : "75px"}
                w="100%"
                bg="brand.50"
            >
                {children}
            </Box>
        </Container>
    )
}

export default MainWrapper;