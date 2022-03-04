import { Box } from '@chakra-ui/react';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <Box
                h="100vh"
                w="70px"
                bg="brand.500"
                position="fixed"
            ></Box>
        </>
    );
}

export default Navbar;