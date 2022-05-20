import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, UseDisclosureProps, VStack } from "@chakra-ui/react"


type Props = {
    disclosure: UseDisclosureProps;
}

const SettingsModal: React.FC<Props> = ({disclosure: {isOpen, onOpen, onClose}}) => {
    return (
        <>
            <Modal isOpen={isOpen!} onClose={onClose!} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={5}>

                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SettingsModal;