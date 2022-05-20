import { useAuth } from '@golink-clients/common';
import MainWrapper from '../shared/MainWrapper';

export const Home = () => {
    useAuth();

    return (
        <MainWrapper>
            <p>Nothing</p>
        </MainWrapper>
    )
}