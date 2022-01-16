import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;
