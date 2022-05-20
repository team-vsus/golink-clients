import { Container } from "./Styles";
import Navbar from './Navbar';

const MainWrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <main>
                {children}
            </main>
        </Container>
    )
}

export default MainWrapper;