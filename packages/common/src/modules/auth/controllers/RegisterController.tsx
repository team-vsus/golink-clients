import React from 'react';
import { CompanyData, useCreateCompany, VerificationData } from '..';
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
    const createCompanyMutation = useCreateCompany();

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

    const submitCompany = async (values: CompanyData) => {
        try {
            const data = await createCompanyMutation.mutateAsync(values)
            return { data, error: null }
        } catch (error) {
            return { data: null, error: error as Error }
        }
    }

    return children({ submitUser, submitCompany, submitVerification })
}
