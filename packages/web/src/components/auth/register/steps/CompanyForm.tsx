import { CompanyData, ControllerResponse } from '@golink-clients/common';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Link, PinInput, PinInputField, Select, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useRegisteredUser } from '../../../../store/useRegisteredUser';
import { useNavigate } from 'react-router-dom';

type Props = {
    isDesktop: boolean;
    next: () => void;
    submit: (data: CompanyData) => Promise<ControllerResponse>;
}

const CompanyForm: React.FC<Props> = ({ isDesktop, next, submit }) => {
    const { userId } = useRegisteredUser();
    const nav = useNavigate();

    return (
        <>
            <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "500px"} align="normal" justify="center">
                <VStack align="flex-start">
                    <Text fontSize="4xl" fontWeight="bold" color="brand.700">Company Details</Text>
                    <Text fontSize="sm" color="brand.200">Introduce your company to your applicants.</Text>
                </VStack>
                <Formik
                    initialValues={{
                        name: '',
                        websiteUrl: '',
                        address: '',
                        country: ''
                    }}
                    onSubmit={async (values, actions) => {
                        actions.setSubmitting(true);
                        console.log("Userid", userId);
                        if (!userId) return;
                        let res = await submit({ ...values, userId });
                        if (res.error === null) {
                            nav("/auth/login")
                        }
                        actions.setSubmitting(false);
                    }}
                >{({ errors, isSubmitting, touched }) => (
                    <Form>
                        <FormControl isInvalid={!!errors.name && touched.name} mt={4}>
                            <FormLabel>Name</FormLabel>
                            <InputGroup>
                                <Field name="name" placeholder="Example GmbH" as={Input} type="text" />
                            </InputGroup>
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.websiteUrl && touched.websiteUrl} mt={4}>
                            <FormLabel>Website URL</FormLabel>
                            <InputGroup>
                                <Field name="websiteUrl" placeholder="https://example.com" as={Input} type="text" />
                            </InputGroup>
                            <FormErrorMessage>{errors.websiteUrl}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.address && touched.address} mt={4}>
                            <FormLabel>Address</FormLabel>
                            <InputGroup>
                                <Field name="address" placeholder="Selstraße 71" as={Input} type="text" />
                            </InputGroup>
                            <FormErrorMessage>{errors.address}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.country && touched.country} mt={4}>
                            <FormLabel>Country</FormLabel>
                            <InputGroup>
                                <Field name="country" placeholder="" as={Select} type="text">
                                    <option>Austria</option>
                                </Field>
                            </InputGroup>
                            <FormErrorMessage>{errors.country}</FormErrorMessage>
                        </FormControl>

                        <Button colorScheme='brand' isLoading={isSubmitting} type="submit" mt={4} w="100%">Submit</Button>
                    </Form>
                )}
                </Formik>
            </VStack>
        </>
    );
}

export default CompanyForm;