import { Button, FormControl, FormHelperText, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, UseDisclosureProps, VStack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { genId } from '../../utils/utils';
import { useGlobalData } from '../../store/useGlobalData';

type Props = {
    disclosure: UseDisclosureProps;
}

const CreateApplicationModal: React.FC<Props> = ({ disclosure: { isOpen, onClose } }) => {
    const { addApplication } = useGlobalData();
    const initialValues = {
        appName: '',
        apiKey: ''
    }
    return (
        <Modal isOpen={isOpen!} onClose={onClose!}>

            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add social media</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            addApplication({
                                id: genId(),
                                name: values.appName,
                                apiKey: values.apiKey
                            });

                            actions.setSubmitting(false);
                            onClose!();
                        }}
                    >
                        <Form>
                            <VStack spacing={3}>
                                <FormControl>
                                    <FormLabel htmlFor='appName'>Social media</FormLabel>
                                    <Field as={Input} id='appName' type='text' name="appName" placeholder="Enter application name" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='apiKey'>Api key</FormLabel>
                                    <Field as={Input} id='apiKey' type='text' name="apiKey" placeholder="Enter api key" />
                                </FormControl>
                            </VStack>
                            <Button colorScheme="brand" w="100%" type="submit" mt={4} mb={4}>Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default CreateApplicationModal;