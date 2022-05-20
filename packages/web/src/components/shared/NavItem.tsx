import { Icon, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type NavItemProps = {
    isOpen: boolean;
    icon: typeof Icon;
    title: string;
    to: string;
    isSelected: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ isOpen, title, icon, isSelected, to }) => {
    return (
        <Box
            mt={4}
            w="100%"
            position="relative"
            _hover={{ bg: 'brand.700', cursor: 'pointer' }}
            transition="all 200ms ease"
        >
            <Link to={to}>
                {isSelected &&
                    <Box
                        position="absolute"
                        h="100%"
                        w="8px"
                        borderRadius="0 4px 4px 0"
                        ml="-4px"
                        bg="white"
                    />}
                <Box
                    display="flex"
                    alignItems="center"
                    w="100%"
                    h={12}
                >
                    <Icon as={icon} fontSize="3xl" minWidth="2rem" margin="0 1.5rem" color={isSelected ? "brand.50" : "brand.200"} />
                    <Text
                        visibility={!isOpen ? "hidden" : "visible"}
                        opacity={!isOpen ? "0" : "1"}
                        transition="visibility 0s, opacity 300ms ease"
                        color={isSelected ? "brand.50" : "brand.200"}
                    >{title}</Text>
                </Box>
            </Link>
        </Box>
    );
}

export default NavItem;