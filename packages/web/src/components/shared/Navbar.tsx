import {
  IconButton,
  Box,
  Flex,
  Heading,
  Avatar,
  Text,
  useDisclosure,
  BoxProps,
  Divider,
} from "@chakra-ui/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import NavItem from "./NavItem";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


interface LinkItemProps {
  name: string;
  icon: any;
  to: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: DashboardIcon, to: "/app/" },
  { name: "Job-Offers", icon: WorkIcon, to: "/app/job-offers" },
  { name: "Candidates", icon: PeopleAltIcon, to: "/app/candidates" },
  { name: "Chat", icon: ChatIcon, to: "/app/chat" },
];

const Navbar: React.FC = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <>
    
      <Flex
        pos="fixed"
        h="100vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 1.5)"
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
        bg= "brand.500"
      >
         <Flex 
                mt={5}
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Flex ml={2}  align="center">
                    <Avatar size="md"/>
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="md" color="brand.50">GoLink</Heading>
                    </Flex>
                    <IconButton
                    position={navSize == "small" ? "fixed" : "relative"}
                    aria-label="Open sidebar"
                    background="brand.500"
                    mt={5}
                    ml={12}
                    color="brand.50"
                    _hover={{ textDecor: 'none',outline: "none"}}
                    _focus={{ textDecor: 'none',outline: "none",background:"brand.500"}}
                    icon={navSize == "small" ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                </Flex>
                <Divider mt={4} display={navSize == "small" ? "none" : "flex"} />
        {LinkItems.map((link) => (
        <NavItem title={link.name} icon={link.icon} navSize={navSize} to={link.to}  >
          
        </NavItem>
        ))}
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm"/>
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm" color="brand.50">Ahmed Murat</Heading>
                        <Text color="brand.200">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
      </Flex>
    </>
  );
};
interface SidebarProps extends BoxProps {
  onClose: () => void;
}


export default Navbar;
