import React from 'react';
import { VerificationData } from '..';
import { useConfirmCode, useRegister } from '../hooks';
import { RegisterData, SubmitFunctions } from '../types';

type RegisterProps = RegisterData;

type Props = {
    children: (
        submits: SubmitFunctions
    ) => JSX.Element | null
}

export const RegisterController: React.FC<Props> = ({ children }) => {
    const registerMutation = useRegister();
    const verificationMutation = useConfirmCode();

    const submitUser = async (values: RegisterProps) => {
        try {
            const data = await registerMutation.mutateAsync(values)
            return { data, error: null }
        } catch (error) {
            return { data: null, error: error as Error }
        }
    }

    const submitVerification = async (values: VerificationData) => {
        try {
            const data = await verificationMutation.mutateAsync(values);
            return { data, error: null }
        } catch (error) {
            return { data: null, error: error as Error }
        }
    }

    const submitCompany = async () => {
        return { data: null, error: null }
    }

    return children({ submitUser, submitCompany, submitVerification })
}
