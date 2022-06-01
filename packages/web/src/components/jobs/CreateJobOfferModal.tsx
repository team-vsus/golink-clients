//fomex35396@lockaya.com
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, UseDisclosureProps, VStack, FormControl, FormHelperText, FormLabel, Input, Textarea, InputGroup, InputLeftElement, Select, HStack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';

type Props = {
    disclosure: UseDisclosureProps;
}
type MyFormValues = {
    jobTitle: string;
}
const CreateJobOfferModal: React.FC<Props> = ({ disclosure: { isOpen, onClose } }) => {
    const initialValues: MyFormValues = { jobTitle: '' };

    return (
        <Modal isOpen={isOpen!} onClose={onClose!} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Job Ad</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                    >
                        <Form>
                            <VStack spacing={3}>
                                <FormControl>
                                    <FormLabel htmlFor='jobTitle'>Job Title</FormLabel>
                                    <Field as={Input} id='jobTitle' type='text' name="jobTitle" placeholder="Enter job title" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='intro'>Intro</FormLabel>
                                    <Field as={Textarea} id='intro' type='text' name="intro" />
                                    <FormHelperText>Include a brief introduction about your company.</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='requirements'>Requirements</FormLabel>
                                    <Field as={Textarea} id='requirements' type='text' name="requirements" />
                                    <FormHelperText>Define job requirements, including qualifications, experience and skills necessary to fulfill the role.</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='benefits'>Benefits</FormLabel>
                                    <Field as={Textarea} id='benefits' type='text' name="benefits" />
                                    <FormHelperText>List any other perks and beneifts that make your company a unique place to work.</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='salary'>Salary</FormLabel>
                                    <Field as={Input} id='salary' name="salary" placeholder="Enter amount" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='category'>Category</FormLabel>
                                    <Select placeholder='Select category' id="category">
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                                <HStack
                                    spacing={5}
                                    w="100%"
                                >
                                    <FormControl>
                                        <FormLabel htmlFor='country'>Country</FormLabel>
                                        <Field as={Input} id='country' name="country" placeholder="Enter country" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor='city'>City</FormLabel>
                                        <Field as={Input} id='city' name="city" placeholder="Enter city" />
                                    </FormControl>
                                </HStack>
                            </VStack>
                        </Form>
                    </Formik>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="brand" w="100%">Submit</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CreateJobOfferModal;