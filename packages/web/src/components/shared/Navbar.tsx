import { Box, Icon, Text, Flex, Avatar, Heading } from '@chakra-ui/react';
import React from 'react';
import { LinkItem } from '../../types';
import NavItem from './NavItem';
import { ArrowCircleLeft, ArrowCircleRight, ArrowRight, Menu } from '@mui/icons-material';

type NavbarProps = {
    linkItems: LinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ linkItems }) => {
    const [isOpen, setOpenNav] = React.useState(true);

    return (
        <>
            <Box
                h="100vh"
                w={!isOpen ? "75px" : "220px"}
                bg="brand.500"
                position="fixed"
                transition="all 200ms ease"
            >
                <Box
                    p={0}
                    m={0}
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    h="100%"
                >
                    <Box
                        w="100%"
                        mt={3}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            w="100%"
                            h={"4rem"}
                        >
                            <Avatar size="md" minWidth="2rem" margin="0 1rem" />
                            <Heading display={!isOpen ? "none" : "block"} color="brand.50" size="lg">Golink</Heading>
                        </Box>
                    </Box>
                    {linkItems.map((link, i) => (
                        <NavItem title={link.title} to={link.to} icon={link.icon} isOpen={isOpen} isSelected={i === 0} />
                    ))}

                    <Box
                        w="100%"
                        mt="auto"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={!isOpen ? "flex-start" : "center"}
                            w="100%"
                            h={"4rem"}
                            transition="all 200ms ease"
                        >
                            <Icon
                                as={!isOpen ? ArrowCircleRight : ArrowCircleLeft}
                                fontSize="3xl"
                                minWidth="2rem"
                                margin="0 1.5rem"
                                color="brand.50"
                                _hover={{ cursor: 'pointer' }}
                                onClick={() => setOpenNav(!isOpen)}
                            />
                        </Box>
                    </Box>
                    <Box
                        w="100%"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            w="100%"
                            h={"4rem"}
                        >
                            <Avatar size="md" minWidth="2rem" margin="0 1rem" />
                            <Flex
                                visibility={!isOpen ? "hidden" : "visible"}
                                opacity={!isOpen ? "0" : "1"}
                                transition="visibility 0s, opacity 200ms ease"
                                flexDir="column"
                            >
                                <Heading as="h3" size="sm" color="brand.50">Ahmed Murat</Heading>
                                <Text color="brand.200">Admin</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Navbar;