import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, UseDisclosureProps, Flex, VStack, Box, Text } from "@chakra-ui/react"


type Props = {
    disclosure: UseDisclosureProps;
}

const SettingsModal: React.FC<Props> = ({ disclosure: { isOpen, onOpen, onClose } }) => {
    return (
        <>
            <Modal isOpen={isOpen!} onClose={onClose!} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <VStack
                                flex="1"
                                w="100%"
                                p="10px 5px"
                            >
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    w="100%"
                                    p="5px 10px"
                                    _hover={{
                                        cursor: 'pointer',
                                        bg: 'brand.100',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <Text>Invite</Text>
                                </Flex>

                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    w="100%"
                                    p="5px 10px"
                                    _hover={{
                                        cursor: 'pointer',
                                        bg: 'brand.100',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <Text>Invite</Text>
                                </Flex>
                            </VStack>
                            <Box
                                flex="4"
                                bg="brand.50"
                                w="100%"
                                borderRadius="5px"
                                minH="500px"
                            >

                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SettingsModal;