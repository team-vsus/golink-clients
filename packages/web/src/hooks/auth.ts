import React from 'react';
import { useMutation, UseMutationOptions, useQuery } from 'react-query';
import { BASE_URL } from '../constants';

const register = async (user: any) => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
    if (response.status === 200)
        return response.json();
    return new Promise((res) => res({ failed: true }));
}

export const useRegister = (options?: Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn"> | undefined) => {
    return useMutation(register, options)
}

const confirmCode = async (code: any) => {
    console.log(JSON.stringify({ code }))
    const res = await fetch(`${BASE_URL}/api/v1/auth/verify`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code })
    });
    if (res.status === 200)
        return res.json();
    return new Promise((res) => res({ failed: true }));
}

export const useConfirmCode = (options?: Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn"> | undefined) => {
    return useMutation(confirmCode, options);
}

export const getMe = () => fetch(`${BASE_URL}/api/v1/users/me`, {
    headers: {
        authorizaion: ''
    }
}).then(r => r.json());

export const useMe = () => useQuery('me', getMe, {
    staleTime: 1000 * 60 * 60 * 1// 1 hours
});