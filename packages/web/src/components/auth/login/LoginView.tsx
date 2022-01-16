import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Text, useMediaQuery, VStack, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AuthUser, useMe } from "@golink-clients/common";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useQueryClient } from "react-query";
import { useNavigate, Link as RouterLink, Navigate } from "react-router-dom";
import Background from '../../../assets/login-bg.png';
import { useAuth } from "../../../hooks/useAuth";

type LoginProps = {
    email: string;
    password: string;
}

type Props = {
    submit: (values: LoginProps) => any
}

const LoginView: React.FC<Props> = ({ submit }) => {
    const [show, setShow] = React.useState(false)
    const [isDesktop] = useMediaQuery('(min-width: 1024px)')
    const nav = useNavigate()

    const { data, isLoading, isFetching } = useMe();

    if (isLoading || isFetching) {
        return null;
    }

    if (data && !data.failed) {
        console.log("Redirect to /app - LoginView")
        return <Navigate to="/app?from=login" />
    }

    return (
        <>
            <Container>
                <InputContainer>
                    <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "442px"} align="left" justify="center"  >
                        <VStack align="left">
                            <Text fontSize="4xl" fontWeight="bold" color="brand.700">Welcome back!</Text>
                            <Text fontSize="sm" color="brand.200">Please enter your details.</Text>
                        </VStack>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={async (values, actions) => {
                                actions.setSubmitting(true);
                                let { data, error } = await submit(values);
                                if (error === null) {
                                    console.log("1")
                                    nav("/app")
                                }
                                actions.setSubmitting(false);
                            }}
                        >{({ errors, isSubmitting, touched }) => (
                            <Form>
                                <FormControl isInvalid={!!errors.email && touched.email}>
                                    <FormLabel>E-Mail</FormLabel>
                                    <InputGroup>
                                        <Field colorScheme="brand" name="email" placeholder="foobar@example.com" as={Input} type="email" />
                                    </InputGroup>
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.password && touched.password} mt={4}>
                                    <FormLabel>
                                        <HStack justify="space-between">
                                            <Text>Password</Text>
                                            <Link as={RouterLink} to="" fontWeight="bold" fontSize="xs" color="brand.700">Forgot Password?</Link>
                                        </HStack>
                                    </FormLabel>
                                    <InputGroup>
                                        <Field name="password" placeholder="Enter your password" as={Input} type={show ? "text" : "password"} />
                                        <InputRightElement width="4.5rem">
                                            <Button colorScheme='brand' h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                                                {show ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                <Button colorScheme='brand' isLoading={isSubmitting} type="submit" mt={4} w="100%" >Submit</Button>
                            </Form>
                        )}
                        </Formik>
                        {!isDesktop && <Flex justify="center">
                            <HStack>
                                <Text fontSize="sm" color="#C9C2C4" >Don't have an account?</Text>
                                <Link as={RouterLink} to="/auth/register" fontWeight="bold" fontSize="sm" color="brand.700">Register</Link>
                            </HStack>
                        </Flex>}
                    </VStack>
                </InputContainer>
                {isDesktop && <DecorationContainer>
                    <BackgroundImage src={Background} />
                    <VStack position="absolute">
                        <Text fontSize="4xl" fontWeight="bold" color="white">Don't have an account?</Text>
                        <Text fontSize="sm" color="white">Click here to create an account</Text>
                        <Button colorScheme="brand" variant="outline" color="white" _hover={{ color: "brand.700" }} onClick={() => nav("/auth/register")}>Register</Button>
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