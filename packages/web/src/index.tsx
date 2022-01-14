import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = extendTheme({
    components: {
        Steps,
    },
    colors: {
        brand: {
            50: '#ffe6e6',
            100: '#f6bdbd',
            200: '#eb9393',
            300: '#e36969',
            400: '#da3f3e',
            500: '#EFA7A7',
            600: '#961c1c',
            700: '#6c1414',
            800: '#420a0b',
            900: '#1c0101',
        },
    }
})
const queryClient = new QueryClient()


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);