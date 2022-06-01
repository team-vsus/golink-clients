import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Link, Text, VStack, Switch } from '@chakra-ui/react';
import { RegisterData, ControllerResponse } from '@golink-clients/common';
import { Field, Form, Formik, getIn, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useIsApplicant } from '../../../../store/useIsApplicant';

type Props = {
    isDesktop: boolean;
    next: () => void;
    submit: (data: RegisterData) => Promise<ControllerResponse>;
}

const SignupForm: React.FC<Props> = ({ isDesktop, next, submit }) => {
    const [show, setShow] = useState(false);
    const { setApplicant, isApplicant } = useIsApplicant();

    return (
        <>
            <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "500px"} align="normal" justify="center">
                <VStack align="flex-start">
                    <Text fontSize="4xl" fontWeight="bold" color="brand.700">Signup</Text>
                    <Text fontSize="sm" color="brand.200">Please enter your details.</Text>
                </VStack>
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        applicant: false
                    }}
                    onSubmit={async (values, actions) => {
                        actions.setSubmitting(true);
                        let res = await submit(values)
                        if (res.error === null) {
                            next();
                        }
                        actions.setSubmitting(false);
                    }}
                >{({ errors, isSubmitting, touched, handleChange, values }) => (
                    <Form>
                        <HStack>
                            <FormControl isInvalid={!!errors.firstname && touched.firstname}>
                                <FormLabel>Firstname</FormLabel>
                                <InputGroup>
                                    <Field name="firstname" placeholder="Max" as={Input} type="text" />
                                </InputGroup>
                                <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors.lastname && touched.lastname}>
                                <FormLabel>Lastname</FormLabel>
                                <InputGroup>
                                    <Field name="lastname" placeholder="Mustermann" as={Input} type="text" />
                                </InputGroup>
                                <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                            </FormControl>
                        </HStack>
                        <FormControl isInvalid={!!errors.email && touched.email} mt={4}>
                            <FormLabel>E-Mail</FormLabel>
                            <InputGroup>
                                <Field name="email" placeholder="foobar@example.com" as={Input} type="email" />
                            </InputGroup>
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.password && touched.password} mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Field name="password" placeholder="Enter your password" as={Input} type={show ? "text" : "password"} />
                                <InputRightElement width="4.5rem">
                                    <Button colorScheme='brand' h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl display='flex' alignItems='center' mt={4} justifyContent="center">
                            <FormLabel htmlFor='candidate' mb='0'>
                                Are you a candidate?
                            </FormLabel>
                            <Field as={Switch} id='candidate' name="applicant" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setApplicant(e.currentTarget.checked);
                                handleChange(e);
                            }} />
                        </FormControl>
                        <Button colorScheme='brand' isLoading={isSubmitting} type="submit" mt={4} w="100%">Submit</Button>
                    </Form>
                )}
                </Formik>
                {!isDesktop && <Flex justify="center">
                    <HStack>
                        <Text fontSize="sm" color="brand.200">Already have an account?</Text>
                        <Link as={RouterLink} to="/auth/login" fontWeight="bold" fontSize="sm" color="brand.700">Login</Link>
                    </HStack>
                </Flex>}
            </VStack>
        </>
    );
}

export default SignupForm;