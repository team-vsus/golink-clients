import React from 'react';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Background from '../../../assets/register-bg.png';
import styled from '@emotion/styled';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import SignupForm from './steps/SignupForm';
import VerificationForm from './steps/VerificationForm';
import { useNavigate } from 'react-router-dom'
import { SubmitFunctions } from '@golink-clients/common';

type Props = {
    submits: SubmitFunctions;
}

const steps = [{ label: "Signup" }, { label: "Verification" }, { label: "Company" }]

const RegisterView: React.FC<Props> = ({ submits }) => {
    const [isDesktop] = useMediaQuery('(min-width: 1024px)')
    const { nextStep, prevStep, activeStep } = useSteps({
        initialStep: 0,
    });

    const nav = useNavigate();

    return (
        <>
            <Container>
                {isDesktop && <DecorationContainer>
                    <BackgroundImage src={Background} />
                    <VStack position="absolute">
                        <Text fontSize="4xl" fontWeight="bold" color="white">Already have an account?</Text>
                        <Text fontSize="sm" color="white">Click here to login</Text>
                        <Button colorScheme="brand" variant="outline" color="white" _hover={{ color: "brand.700" }} onClick={() => nav("/auth/login")}>Login</Button>
                    </VStack>
                </DecorationContainer>}
                <InputContainer>
                    <Box w="100%">
                        <Steps p={`0 ${!isDesktop ? "5%" : "10%"}`} activeStep={activeStep} colorScheme="brand">
                            {steps.map(({ label }, index) => (
                                <Step label={label} key={label}>
                                    <StepWrapper>
                                        {index === 0 && <SignupForm isDesktop={isDesktop} next={nextStep} submit={submits.submitUser} />}
                                        {index === 1 && <VerificationForm isDesktop={isDesktop} next={nextStep} submit={submits.submitVerification} />}
                                    </StepWrapper>
                                </Step>
                            ))}
                        </Steps>
                    </Box>
                </InputContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const DecorationContainer = styled.div`
    height: 100%; 
    display: flex; 
    justify-content: center; 
    position: relative; 
    flex-direction: column; 
    align-items: center;
`

const BackgroundImage = styled.img`
    height: 100%; 
    left: 0; 
    bottom: 0; 
    zIndex: -1;
`;

const InputContainer = styled.div`
    height: 100%; 
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const StepWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default RegisterView;