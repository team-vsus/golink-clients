import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { AuthUser, LoginData, RegisterData, VerificationData } from '.';
import { BASE_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import React from 'react';

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

export const logout = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include'
    });
    return res.json();
}

//export const useLogout = (options?: Omit<UseQueryOptions<any, unknown, any, "logout">, "queryKey" | "queryFn">) => useQuery('logout', logout, options);
export const useLogout = (options?: Omit<UseMutationOptions<any, unknown, void, unknown>, "mutationFn"> | undefined) => useMutation(logout, options);

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

export const useAuth = () => {
    const nav = useNavigate();
    const { data, isLoading, isFetching } = useMe();

    React.useEffect(() => {
        if (!isLoading && !isFetching && data && data.failed === true) {
            nav(`/auth/login?next=${window.location.pathname}`)
        }
    }, [isLoading, data])

}