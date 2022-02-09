import React, { useState } from 'react';
import { Container } from '../../shared/Styles';
import WaveTopRight from '../../../assets/reset-pw-top-right.png';
import WaveBottomLeft from '../../../assets/reset-pw-bottom-left.png';
import { Button, FormControl, FormErrorMessage, FormLabel, Img, Input, InputGroup, Link, VStack, Text, Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import { useMediaQuery } from '@chakra-ui/react';
import { ControllerResponse, ResetPasswordData } from '@golink-clients/common';

type Props = {
    submit: (data: ResetPasswordData) => Promise<ControllerResponse>;
}

const ResetPasswordView: React.FC<Props> = ({ submit }) => {
    const [isDesktop] = useMediaQuery('(min-width: 1120px)')
    const [isSuccess, setSuccess] = useState(false);
    const params = useParams();

    return (
        <Container>
            {isDesktop && <>
                <Img src={WaveBottomLeft} position="absolute" bottom="0" left="0" zIndex="-1" />
                <Img src={WaveTopRight} position="absolute" top="0" right="0" zIndex="-1" />
            </>}
            <InputContainer>
                <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "663px"} align="left" justify="center"  >
                    {!isSuccess && <>
                        <VStack align="center">
                            <Text fontSize="4xl" fontWeight="bold" color="brand.700">Set a new secure password</Text>
                            <Text fontSize="xl" color="brand.200">Don't forget your password!</Text>
                        </VStack>
                        <Formik
                            initialValues={{
                                newPassword: '',
                            }}
                            onSubmit={async (values, actions) => {
                                actions.setSubmitting(true);
                                let { error } = await submit({newPassword: values.newPassword, token: params.token});
                                if (error === null) {
                                    setSuccess(true);
                                }
                                actions.setSubmitting(false);
                            }}
                        >{({ errors, isSubmitting, touched }) => (
                            <Form>
                                <FormControl isInvalid={!!errors.newPassword && touched.newPassword}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Field colorScheme="brand" name="newPassword" placeholder="Enter your new password" as={Input} type="password" />
                                    </InputGroup>
                                    <FormErrorMessage>{errors.newPassword}</FormErrorMessage>
                                </FormControl>
                                <Button colorScheme='brand' isLoading={isSubmitting} type="submit" mt={4} w="100%" >Submit</Button>
                            </Form>
                        )}
                        </Formik>
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
                            <AlertTitle mt={4} mb={1} fontSize='lg'>Successfully changed password</AlertTitle>
                            <AlertDescription maxWidth='sm'>You can now login back with your new password.</AlertDescription>
                            <Link as={RouterLink} to="/auth/login" fontWeight="bold" fontSize="md" color="brand.700" mt={4} >Back to login</Link>
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

export default ResetPasswordView;