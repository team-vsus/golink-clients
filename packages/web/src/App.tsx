import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ForgotPasswordConnector from './components/auth/forgot-pw/ForgotPasswordConnector';
import ResetPasswordConnector from './components/auth/forgot-pw/ResetPasswordConnector';
import LoginConnector from './components/auth/login/LoginConnector';
import RegisterConnector from './components/auth/register/RegisterConnector';
import { CandidateList } from './components/candidates/CandidateList';
import { Home } from './components/main/Home';
import JobsView from './components/jobs/JobOffersList';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/app" element={<Home />} />
                    <Route path="/app/candidates" element={<CandidateList />} />
                    <Route path="/app/job-offers" element={<JobsView />} />
                    <Route path="/auth/login" element={<LoginConnector />} />
                    <Route path="/auth/register" element={<RegisterConnector />} />
                    <Route path="/auth/forgot-pw" element={<ForgotPasswordConnector />} />
                    <Route path="/auth/reset-pw/:token" element={<ResetPasswordConnector />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;
