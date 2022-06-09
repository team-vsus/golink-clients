import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import ForgotPasswordConnector from './components/auth/forgot-pw/ForgotPasswordConnector';
import ResetPasswordConnector from './components/auth/forgot-pw/ResetPasswordConnector';
import LoginConnector from './components/auth/login/LoginConnector';
import RegisterConnector from './components/auth/register/RegisterConnector';
import { CandidateList } from './components/candidates/CandidateList';
import  { CandidateDetails }  from './components/candidate/CandidateDetails';
import { Home } from './components/main/Home';
import JobsView from './components/jobs/JobOffersList';
import { JobOfferView } from './components/jobs/JobOfferView';
import Chat from './components/chat/Chat';
import Settings from './components/settings/Settings';
import { useEffect } from 'react';
import Alerts from './components/shared/Alerts';

function App() {
    return (
        <>
            <Alerts />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RedirectToLogin />} />
                    <Route path="/app" element={<Home />} />
                    <Route path="/app/settings" element={<Settings />} />
                    <Route path="/app/candidates" element={<CandidateList />} />
                    <Route path="/app/job-offers" element={<JobsView />} />
                    <Route path="/app/job-offers/:id" element={<JobOfferView />} />
                    <Route path="/app/chat" element={<Chat />} />
                    <Route path="/auth/login" element={<LoginConnector />} />
                    <Route path="/auth/register" element={<RegisterConnector />} />
                    <Route path="/auth/forgot-pw" element={<ForgotPasswordConnector />} />
                    <Route path="/auth/reset-pw/:token" element={<ResetPasswordConnector />} />
                    <Route path="/app/candidate/:id" element={<CandidateDetails />} />
                    <Route path="/app/candidate/" element={<CandidateDetails />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

const RedirectToLogin = () => {
    const nav = useNavigate()
    useEffect(() => nav("/auth/login"), [])
    return (<></>);
}

export default App;
