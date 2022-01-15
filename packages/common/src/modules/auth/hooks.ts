import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { LoginData, RegisterData, VerificationData } from '.';
import { BASE_URL } from '../../constants';

const register = async (user: RegisterData) => {
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

const login = async (user: LoginData) => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(user)
    });
    if (response.status === 200)
        return response.json();

    throw new Error("Something happened");
}

export const useLogin = (options?: Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn"> | undefined) => {
    return useMutation(login, options)
}


const confirmCode = async (data: VerificationData) => {
    console.log(JSON.stringify({ code: data.code }))
    const res = await fetch(`${BASE_URL}/api/v1/auth/verify`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: data.code })
    });
    if (res.status === 200)
        return res.json();
    return new Promise((res) => res({ failed: true }));
}

export const useConfirmCode = (options?: Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn"> | undefined) => {
    return useMutation(confirmCode, options);
}

export const getMe = async () => {
    console.log("Make req")
    return fetch(`${BASE_URL}/api/v1/users/me`, {
        credentials: 'include'
    }).then(r => r.json())
};

export const useMe = (options?: Omit<UseQueryOptions<any, unknown, any, "me">, "queryKey" | "queryFn">) => useQuery('me', getMe, options);