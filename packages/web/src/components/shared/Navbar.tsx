import { Box, Icon, Text, Flex, Avatar, Heading, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { LinkItem } from '../../types';
import NavItem from './NavItem';
import { ArrowCircleLeft, ArrowCircleRight, ArrowRight, Logout, Menu, Settings } from '@mui/icons-material';
import SettingsModal from '../main/SettingsModal';
import { Link, useLocation } from 'react-router-dom';
import { Dashboard, PeopleAlt, Work, Chat } from '@mui/icons-material';
import { useNavsize } from '../../store/useNavsize';
import LogoutModal from './LogoutModal';
import { useQuery, useQueryClient } from 'react-query';
import { getCompany } from '../../api/company';



const Navbar: React.FC = () => {
    //const [isOpen, setOpenNav] = React.useState(false);
    const { isNavOpen, setNavOpen } = useNavsize();
    const logoutDisclosure = useDisclosure()
    const location = useLocation();
    const queryClient = useQueryClient();
    const me: any = queryClient.getQueryData("me");
    console.log("Loc", me)
    const company: any = queryClient.getQueryData("myCompany");
    const linkItems: LinkItem[] = [
        { title: "Dashboard", icon: Dashboard, to: "/app" },
        { title: "Job-Offers", icon: Work, to: "/app/job-offers" },
        { title: "Candidates", icon: PeopleAlt, to: "/app/candidates" },
        { title: "Chat", icon: Chat, to: "/app/chat" },
        { title: "Settings", icon: Settings, to: "/app/settings" },
    ];

    const linkItemsCandidate: LinkItem[] = [
        { title: "Dashboard", icon: Dashboard, to: "/app" },
        { title: "Chat", icon: Chat, to: "/app/chat" },
    ]

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
                            <Heading display={!isNavOpen ? "none" : "block"} color="brand.50" size="md">{company ? company.name : "test"}</Heading>
                        </Box>
                    </Box>
                    {(me.applicant ? linkItemsCandidate : linkItems).map((link, i) => (
                        <NavItem key={i} title={link.title} to={link.to} icon={link.icon} isOpen={isNavOpen} isSelected={link.to === location.pathname} />
                    ))}
                    <Box
                        mt={4}
                        w="100%"
                        position="relative"
                        sx={{
                            "&:hover": {
                                bg: 'brand.700',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={logoutDisclosure.onOpen}
                        transition="all 200ms ease"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            w="100%"
                            h={12}
                        >
                            <Icon as={Logout} fontSize="3xl" minWidth="2rem" margin="0 1.5rem" color={"#DA5353"} />
                            <Text
                                visibility={!isNavOpen ? "hidden" : "visible"}
                                opacity={!isNavOpen ? "0" : "1"}
                                transition="visibility 0s, opacity 300ms ease"
                                color={"#DA5353"}
                            >Logout</Text>
                        </Box>
                    </Box>

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
                                src={`https://ui-avatars.com/api/?name=${me.firstname}+${me.lastname}&bold=true`}
                                size="md"
                                minWidth="2rem"
                                margin="0 1rem" />
                            <Flex
                                visibility={!isNavOpen ? "hidden" : "visible"}
                                opacity={!isNavOpen ? "0" : "1"}
                                transition="visibility 0s, opacity 200ms ease"
                                flexDir="column"
                            >
                                <Heading as="h3" size="sm" color="brand.50">{`${me.firstname} ${me.lastname}`}</Heading>
                                <Text color="brand.200">{me.applicant ? "Candidate" : "Recruiter"}</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <LogoutModal disclosure={logoutDisclosure} />
        </>
    );
}

export default Navbar;