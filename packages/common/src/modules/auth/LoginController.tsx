import React from 'react';

type LoginProps = {
    username: string;
    password: string;
}

type Props = {
    children: (
        submit: (values: LoginProps) => any
    ) => JSX.Element | null
}

export const LoginController: React.FC<Props> = ({ children }) => {
    const submit = (values: LoginProps) => {
        console.log(values);
    }

    return children(submit)
}
