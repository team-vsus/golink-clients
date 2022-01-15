import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMe } from './hooks';

type Props = {
    onFinish?: (data: any) => void;
    children: JSX.Element | null
}

export const RequireAuth = ({ onFinish, children }: Props) => {
    const { data, isLoading } = useMe({
        onSuccess: onFinish
    });

    if (isLoading) {
        return null;
    }
    if (data && data.failed) {
        console.log("Data", data)
        return <Navigate to="/auth/login" />;
    }

    return children
}