import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, UseDisclosureProps, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../api/auth";
import { useSelectedConv } from "../../store/useSelectedConv";

type Props = {
    disclosure: UseDisclosureProps
}


const LogoutModal: React.FC<Props> = ({ disclosure: { isOpen, onClose } }) => {
    const nav = useNavigate()
    const { selectConv } = useSelectedConv();
    const logoutMutation = useLogout()
    return (
        <Modal isOpen={isOpen!} onClose={onClose!}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Logout</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Do you really want to logout?</Text>
                </ModalBody>

                <ModalFooter alignItems="center">
                    <Button variant='ghost' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme="red" onClick={async () => {
                        const data = await logoutMutation.mutateAsync();
                        console.log("Data from logout", data);
                        selectConv(null);
                        nav("/auth/login");

                    }}>Logout</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default LogoutModal;