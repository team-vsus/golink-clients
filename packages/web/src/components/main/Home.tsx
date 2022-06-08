import { useAuth } from '@golink-clients/common';
import { useQuery } from 'react-query';
import { getCompany } from '../../api/company';
import MainWrapper from '../shared/MainWrapper';

export const Home = () => {
    useAuth();

    return (
        <MainWrapper>
            <p>Nothing</p>
        </MainWrapper>
    )
}