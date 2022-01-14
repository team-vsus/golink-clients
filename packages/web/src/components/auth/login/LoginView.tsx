import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Background from '../../../assets/login-bg.png';

type LoginProps = {
    username: string;
    password: string;
}

type Props = {
    submit: (values: LoginProps) => any
}

const LoginView: React.FC<Props> = ({ submit }) => {
    const [show, setShow] = React.useState(false)
    const [isDesktop] = useMediaQuery('(min-width: 1024px)')

    return (
        <>
            <Container>
                <InputContainer>
                    <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "442px"} align="left" justify="center"  >
                        <VStack align="left">
                            <Text fontSize="4xl" fontWeight="bold" color="#7E5959">Welcome back!</Text>
                            <Text fontSize="sm" color="#C9C2C4">Please enter your details.</Text>
                        </VStack>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values, actions) => {
                                console.log({ values, actions });
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }}
                        >{({ errors, isSubmitting, touched }) => (
                            <Form>
                                <FormControl isInvalid={!!errors.email && touched.email}>
                                    <FormLabel>E-Mail</FormLabel>
                                    <InputGroup>
                                        <Field name="email" placeholder="foobar@example.com" as={Input} type="email" />
                                    </InputGroup>
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.password && touched.password} mt={4}>
                                    <FormLabel>
                                        <HStack justify="space-between">
                                            <Text>Password</Text>
                                            <Text fontWeight="bold" fontSize="xs" color="#7E5959">Forgot Password?</Text>
                                        </HStack>
                                    </FormLabel>
                                    <InputGroup>
                                        <Field name="password" placeholder="Enter your password" as={Input} type={show ? "text" : "password"} />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" bg="#EFA7A7" color="white" onClick={() => setShow(!show)}>
                                                {show ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                <Button isLoading={isSubmitting} type="submit" mt={4} w="100%" color="white" bg="#EFA7A7">Submit</Button>
                            </Form>
                        )}
                        </Formik>
                        {!isDesktop && <Flex justify="center">
                            <HStack>
                                <Text fontSize="sm" color="#C9C2C4" >Don't have an account?</Text>
                                <Text fontWeight="bold" fontSize="sm" color="#7E5959">Register</Text>
                            </HStack>
                        </Flex>}
                    </VStack>
                </InputContainer>
                {isDesktop && <DecorationContainer>
                    <BackgroundImage src={Background}  />
                    <VStack position="absolute">
                        <Text fontSize="4xl" fontWeight="bold" color="white">Don't have an account?</Text>
                        <Text fontSize="sm" color="white">Click here to create an account</Text>
                        <Button>Register</Button>
                    </VStack>
                </DecorationContainer>}
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const InputContainer = styled.div`
    height: 100%; 
    display: flex; 
    justify-content: center; 
    flex: 1;
`;

const DecorationContainer = styled.div`
    height: 100%; 
    display: flex; 
    justify-content: center; 
    position: relative; 
    flex-direction: column; 
    align-items: center;
`;

const BackgroundImage = styled.img`
    height: 100%; 
    right: 0; 
    bottom: 0; 
    zIndex: -1;
`;
export default LoginView;