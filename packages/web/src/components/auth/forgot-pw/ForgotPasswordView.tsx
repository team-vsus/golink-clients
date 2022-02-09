import React, { useState } from 'react';
import { Container } from '../../shared/Styles';
import WaveTopLeft from '../../../assets/forgot-pw-top-left.png';
import WaveBottomRight from '../../../assets/forgot-pw-bottom-right.png';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Img, Input, InputGroup, Link, VStack, Text, Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import { useMediaQuery } from '@chakra-ui/react';
import { ControllerResponse, ForgotPasswordData } from '@golink-clients/common';

type Props = {
    submit: (data: ForgotPasswordData) => Promise<ControllerResponse>;
}

const ForgotPasswordView: React.FC<Props> = ({ submit }) => {
    const [isDesktop] = useMediaQuery('(min-width: 1120px)')
    const [isSuccess, setSuccess] = useState(false);

    return (
        <Container>
            {isDesktop && <>
                <Img src={WaveTopLeft} position="absolute" top="0" left="0" zIndex="-1" />
                <Img src={WaveBottomRight} position="absolute" bottom="0" right="0" zIndex="-1" />
            </>}
            <InputContainer>
                <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "663px"} align="left" justify="center"  >
                    {!isSuccess && <>
                        <VStack align="center">
                            <Text fontSize="4xl" fontWeight="bold" color="brand.700">Forgot your Password?</Text>
                            <Text fontSize="xl" color="brand.200">Enter your E-Mail! We will send you a link</Text>
                        </VStack>
                        <Formik
                            initialValues={{
                                email: '',
                            }}
                            onSubmit={async (values, actions) => {
                                actions.setSubmitting(true);
                                let { error } = await submit(values);
                                if (error === null) {
                                    setSuccess(true);
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
                                <Button colorScheme='brand' isLoading={isSubmitting} type="submit" mt={4} w="100%" >Submit</Button>
                            </Form>
                        )}
                        </Formik>
                        <Flex w="100%" justifyContent="center">
                            <Link as={RouterLink} to="/auth/login" fontWeight="bold" fontSize="md" color="brand.700">Back to login</Link>
                        </Flex>
                    </>}
                    {isSuccess && <>
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                            bg="white"
                        >
                            <AlertIcon boxSize='40px' mr={0} color="brand.500" />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>Please check your email</AlertTitle>
                            <AlertDescription maxWidth='sm'>We sent you an email with intstructions to reset your password.</AlertDescription>
                        </Alert>
                    </>}
                </VStack>
            </InputContainer>

        </Container>
    );
}

const InputContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ForgotPasswordView;