import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ForgotPasswordConnector from './components/auth/forgot-pw/ForgotPasswordConnector';
import ResetPasswordConnector from './components/auth/forgot-pw/ResetPasswordConnector';
import LoginConnector from './components/auth/login/LoginConnector';
import RegisterConnector from './components/auth/register/RegisterConnector';
import { Home } from './components/main/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/app" element={<Home />} />
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
