import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useRegister } from '../../../../hooks/auth';

type Props = {
    isDesktop: boolean;
    next: () => void;
}

const SignupForm: React.FC<Props> = ({ isDesktop, next }) => {
    const mutation = useRegister({
        onSuccess: (data) => {
            if (!data.failed) {
                next()
            }
        }
    });

    return (
        <>
            <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "500px"} align="normal" justify="center">
                <VStack align="flex-start">
                    <Text fontSize="4xl" fontWeight="bold" color="#7E5959">Signup</Text>
                    <Text fontSize="sm" color="#C9C2C4">Please enter your details.</Text>
                </VStack>
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);

                        mutation.mutate(values)
                        actions.setSubmitting(false);
                    }}
                >{({ errors, isSubmitting, touched }) => (
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
                                <Field name="password" placeholder="Enter your password" as={Input} type="password" />
                            </InputGroup>
                            <FormErrorMessage>{errors.password}</FormErrorMessage>
                        </FormControl>
                        <Button isLoading={isSubmitting} type="submit" mt={4} w="100%" color="white" bg="#EFA7A7">Submit</Button>
                    </Form>
                )}
                </Formik>
                {!isDesktop && <Flex justify="center">
                    <HStack>
                        <Text fontSize="sm" color="#C9C2C4" >Already have an account?</Text>
                        <Text fontWeight="bold" fontSize="sm" color="#7E5959">Login</Text>
                    </HStack>
                </Flex>}
            </VStack>
        </>
    );
}

export default SignupForm;