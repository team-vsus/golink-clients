import React from 'react';
import { ResetPasswordData, useResetPassword } from '..';
import { ControllerResponse } from '../../..';

type Props = {
    children: (
        submit: (data: ResetPasswordData) => Promise<ControllerResponse>
    ) => JSX.Element | null
}

export const ResetPasswordController: React.FC<Props> = ({ children }) => {
    const resetPasswordMutation = useResetPassword();

    const submit = async (data: ResetPasswordData) => {
        try {
            const res = await resetPasswordMutation.mutateAsync(data);
            if (res.failed)
                return { data: null, error: new Error("Failed request") }
            return { data: res, error: null }
        } catch (err) {
            return { data: null, error: err as Error};
        }
    }

    return children(submit)
}
