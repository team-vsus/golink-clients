import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, UseDisclosureProps } from '@chakra-ui/react';
import React from 'react'
import { useGlobalData } from '../../store/useGlobalData';

type Props = {
    disclosure: UseDisclosureProps;
}

const ApplicationModal: React.FC<Props> = ({ disclosure: { isOpen, onClose } }) => {
    const { applications } = useGlobalData();
    return (
        <Modal isOpen={isOpen!} onClose={onClose!}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Applications</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ApplicationModal