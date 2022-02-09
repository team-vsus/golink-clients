import React from 'react';
import { LoginData } from '..';
import { ControllerResponse } from '../../..';
import { useLogin} from '../hooks';

type Props = {
    children: (
        submit: (values: LoginData) => Promise<ControllerResponse>
    ) => JSX.Element | null
}

export const LoginController: React.FC<Props> = ({ children }) => {
    const mutation = useLogin();
    const submit = async (values: LoginData) => {
        try {
            const data = await mutation.mutateAsync(values)
            return { data, error: null }
        } catch (error) {
            return { data: null, error: error as Error };
        }
    }

    return children(submit)
}
