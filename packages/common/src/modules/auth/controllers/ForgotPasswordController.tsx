import React from 'react';
import { ForgotPasswordData, useForgotPassword } from '..';
import { ControllerResponse } from '../../..';

type Props = {
    children: (
        submit: (data: ForgotPasswordData) => Promise<ControllerResponse>
    ) => JSX.Element | null
}

export const ForgotPasswordController: React.FC<Props> = ({ children }) => {
    const forgotPasswordMutation = useForgotPassword();

    const submit = async (data: ForgotPasswordData) => {
        try {
            const res = await forgotPasswordMutation.mutateAsync(data);
            if (res.failed)
                return { data: null, error: new Error("Failed request") }
            return { data: res, error: null }
        } catch (err) {
            return { data: null, error: err as Error};
        }
    }

    return children(submit)
}
