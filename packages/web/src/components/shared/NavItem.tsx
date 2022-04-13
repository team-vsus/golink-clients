import React, { ReactText } from "react";
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    FlexProps
} from '@chakra-ui/react'
import { useNavigate, Link as RouterLink, Navigate } from "react-router-dom";
interface NavItemProps extends FlexProps {
    icon: typeof Icon;
    navSize: any;
    title: string;
    to: string;
  }
  
  const NavItem = ({ icon, navSize,title,to }:NavItemProps) => {
    return (
      
         <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
         >
               <Menu placement="right">
                <Link 
                    as={RouterLink} to={to }
                    p={5}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "brand.900" }}
                    w="100%"
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="" color="brand.50" />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color="brand.50">{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>

            </Menu>
        </Flex>
      
      
    );
  };
  export default NavItem;