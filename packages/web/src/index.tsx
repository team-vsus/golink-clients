import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { QueryClient, QueryClientProvider } from 'react-query';
import { golinkColors } from '@golink-clients/common';

const theme = extendTheme({
    components: {
        Steps,
    },
    colors: {
        brand: golinkColors
    }
})
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})


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