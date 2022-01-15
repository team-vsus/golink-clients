import React from 'react';
import { useLogin, useRegister } from '../hooks';

type LoginProps = {
    email: string;
    password: string;
}

type Props = {
    children: (
        submit: (values: LoginProps) => any
    ) => JSX.Element | null
}

export const LoginController: React.FC<Props> = ({ children }) => {
    const mutation = useLogin();
    const submit = async (values: LoginProps) => {
        try {
            const data = await mutation.mutateAsync(values)
            console.log(data)
            return { data, error: null }
        } catch (error) {
            return { data: null, error };
        }
    }

    return children(submit)
}
