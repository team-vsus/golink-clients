//fomex35396@lockaya.com
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, UseDisclosureProps, VStack, FormControl, FormHelperText, FormLabel, Input, Textarea, InputGroup, InputLeftElement, Select, HStack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useGlobalData } from '../../store/useGlobalData';
import { JobAd } from '../../types';
import { genId } from '../../utils/utils';
import { DateTime } from 'luxon';
import { createJobOffer } from '../../api/joboffers';
import { useMutation, useQueryClient } from 'react-query';

type Props = {
    disclosure: UseDisclosureProps;
}

const CreateJobOfferModal: React.FC<Props> = ({ disclosure: { isOpen, onClose } }) => {
    const initialValues: Omit<JobAd, "id"> = {
        name: '',
        applicantsCounts: 0,
        country: '',
        city: '',
        open: true,
        createdAt: DateTime.now().toLocaleString(DateTime.DATE_MED),
        description: '',
        salary: 0
    };
    const queryClient = useQueryClient();

    const createJobOfferMutation = useMutation(createJobOffer, {
        onMutate: (d) => {
            queryClient.cancelQueries("joboffers");

            const snapshot = queryClient.getQueryData<JobAd[]>("joboffers");

            snapshot && queryClient.setQueryData<JobAd[]>("joboffers", prev => (
                [...[...snapshot, { ...d, id: Date.now() }]]
            ));

            return { snapshot };
        },
        onError: (_, __, context: any) => {
            if (context?.snapshot) {
                queryClient.setQueryData<JobAd[]>('joboffers', context.snapshot);
            }
        },
        onSettled: () => queryClient.invalidateQueries("joboffers"),
    })

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
                            actions.setSubmitting(true);
                            //addJob({ ...values, id: genId() });
                            createJobOfferMutation.mutate(values);
                            console.log(values);
                            actions.setSubmitting(false);
                            onClose!();
                        }}
                    >
                        <Form>
                            <VStack spacing={3}>
                                <FormControl>
                                    <FormLabel htmlFor='jobTitle'>Job Title</FormLabel>
                                    <Field as={Input} id='jobTitle' type='text' name="name" placeholder="Enter job title" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='intro'>Intro</FormLabel>
                                    <Field as={Textarea} id='intro' type='text' name="description" />
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
                                    <Field as={Input} id='salary' name="salary" placeholder="Enter amount" type="number" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='category'>Category</FormLabel>
                                    <Select placeholder='Select category' id="category">
                                        <option value='option1'>Finance</option>
                                        <option value='option2'>Marketing</option>
                                        <option value='option3'>Engineering</option>
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
                            <Button colorScheme="brand" w="100%" type="submit" mt={4} mb={4}>Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default CreateJobOfferModal;