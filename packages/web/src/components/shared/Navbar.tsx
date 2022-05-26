import { Box, Icon, Text, Flex, Avatar, Heading, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { LinkItem } from '../../types';
import NavItem from './NavItem';
import { ArrowCircleLeft, ArrowCircleRight, ArrowRight, Menu } from '@mui/icons-material';
import SettingsModal from '../main/SettingsModal';
import { Link, useLocation } from 'react-router-dom';
import { Dashboard, PeopleAlt, Work, Chat } from '@mui/icons-material';
import { useNavsize } from '../../store/useNavsize';

const linkItems: LinkItem[] = [
    { title: "Dashboard", icon: Dashboard, to: "/app" },
    { title: "Job-Offers", icon: Work, to: "/app/job-offers" },
    { title: "Candidates", icon: PeopleAlt, to: "/app/candidates" },
    { title: "Chat", icon: Chat, to: "/app/chat" },
];


const Navbar: React.FC = () => {
    //const [isOpen, setOpenNav] = React.useState(false);
    const {isNavOpen, setNavOpen} = useNavsize();
    const settingsDisclosure = useDisclosure()
    const location = useLocation();
    console.log("Loc", location);

    return (
        <>
            <Box
                h="100vh"
                w={!isNavOpen ? "75px" : "220px"}
                bg="brand.500"
                position="fixed"
                transition="all 200ms ease"
                zIndex="10"
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
                            <Heading display={!isNavOpen ? "none" : "block"} color="brand.50" size="lg">Golink</Heading>
                        </Box>
                    </Box>
                    {linkItems.map((link, i) => (
                        <NavItem key={i} title={link.title} to={link.to} icon={link.icon} isOpen={isNavOpen} isSelected={link.to === location.pathname} />
                    ))}

                    <Box
                        w="100%"
                        mt="auto"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={!isNavOpen ? "flex-start" : "center"}
                            w="100%"
                            h={"4rem"}
                            transition="all 200ms ease"
                        >
                            <Icon
                                as={!isNavOpen ? ArrowCircleRight : ArrowCircleLeft}
                                fontSize="3xl"
                                minWidth="2rem"
                                margin="0 1.5rem"
                                color="brand.50"
                                _hover={{ cursor: 'pointer' }}
                                onClick={() => setNavOpen(!isNavOpen)}
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
                            <Avatar
                                sx={{
                                    _hover: {
                                        cursor: 'pointer'
                                    }
                                }}
                                onClick={settingsDisclosure.onOpen}
                                size="md"
                                minWidth="2rem"
                                margin="0 1rem" />
                            <Flex
                                visibility={!isNavOpen ? "hidden" : "visible"}
                                opacity={!isNavOpen ? "0" : "1"}
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
            <SettingsModal disclosure={settingsDisclosure} />
        </>
    );
}

export default Navbar;