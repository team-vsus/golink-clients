import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useConfirmCode } from '../../../../hooks/auth';

type Props = {
    isDesktop: boolean;
    next: () => void;
}

const VerificationForm: React.FC<Props> = ({ isDesktop, next }) => {
    const mutation = useConfirmCode({
        onSuccess: (data) => {
            if (!data.failed) {
                next()
            }
        }
    });
    return (
        <>
            <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "442px"} align="normal" justify="center">
                <VStack align="center">
                    <Text fontSize="4xl" fontWeight="bold" color="#7E5959">Verficiation</Text>
                    <Text fontSize="sm" color="#C9C2C4">Please type the verification code.</Text>
                </VStack>
                <Formik
                    initialValues={{
                        code: { parts: new Array(6).fill('') },
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        console.log(values)
                        mutation.mutate(values.code.parts.join(""))
                        actions.setSubmitting(false);
                    }}
                >{({ errors, isSubmitting, touched }) => (
                    <Form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <FormControl>
                            <InputGroup justifyContent="center">
                                <HStack>
                                    <PinInput type="alphanumeric">
                                        {new Array(6).fill(0).map((_, i) => <Field name={`code.parts[${i}]`} as={PinInputField} />)}
                                    </PinInput>
                                </HStack>
                            </InputGroup>
                            <FormErrorMessage>{errors.code}</FormErrorMessage>
                        </FormControl>
                        <Button isLoading={isSubmitting} type="submit" w="50%" mt={4} color="white" bg="#EFA7A7">Verify</Button>
                    </Form>
                )}
                </Formik>
            </VStack>
        </>
    );
}

export default VerificationForm;