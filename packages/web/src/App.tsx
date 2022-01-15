import { RequireAuth } from '@golink-clients/common';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginConnector from './components/auth/login/LoginConnector';
import RegisterConnector from './components/auth/register/RegisterConnector';
import { Home } from './components/main/Home';
import { useAuth } from './hooks/useAuth';

function App() {
    const { authenticate } = useAuth();
    const onFinish = (data: any) => {
        if (data && data.failed) return;
        authenticate(data);
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/app" element={
                        <RequireAuth onFinish={onFinish}>
                            <Home />
                        </RequireAuth>
                    } />
                    <Route path="/auth/login" element={<LoginConnector />} />
                    <Route path="/auth/register" element={<RegisterConnector />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;
