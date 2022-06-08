import { Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { ControllerResponse, VerificationData } from '@golink-clients/common';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useIsApplicant } from '../../../../store/useIsApplicant';
import { useRegisteredUser } from '../../../../store/useRegisteredUser';

type Props = {
    isDesktop: boolean;
    next: () => void;
    submit: (data: VerificationData) => Promise<ControllerResponse>;
}

const VerificationForm: React.FC<Props> = ({ isDesktop, next, submit }) => {
    const { isApplicant } = useIsApplicant();
    const { setUserId } = useRegisteredUser();
    return (
        <>
            <VStack spacing={5} padding="50px" h="100%" w={!isDesktop ? "100%" : "442px"} align="normal" justify="center">
                <VStack align="center">
                    <Text fontSize="4xl" fontWeight="bold" color="brand.700">Verficiation</Text>
                    <Text fontSize="sm" color="brand.200">Please type the verification code.</Text>
                </VStack>
                <Formik
                    initialValues={{
                        code: { parts: new Array(6).fill('') },
                    }}
                    onSubmit={async (values, actions) => {
                        actions.setSubmitting(true);
                        let { error, data } = await submit({ code: values.code.parts.join("") })
                        if (error === null) {
                            setUserId(data.id);
                            next()
                        }
                        actions.setSubmitting(false);
                    }}
                >{({ errors, isSubmitting }) => (
                    <Form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <FormControl>
                            <InputGroup justifyContent="center">
                                <HStack>
                                    <PinInput type="alphanumeric">
                                        {new Array(6).fill(0).map((_, i) => <Field key={i} name={`code.parts[${i}]`} as={PinInputField} />)}
                                    </PinInput>
                                </HStack>
                            </InputGroup>
                            <FormErrorMessage>{errors.code}</FormErrorMessage>
                        </FormControl>
                        <Button colorScheme='brand' isLoading={isSubmitting} type="submit" w="50%" mt={10}>Verify</Button>
                    </Form>
                )}
                </Formik>
            </VStack>
        </>
    );
}

export default VerificationForm;