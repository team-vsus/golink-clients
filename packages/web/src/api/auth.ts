import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../constants";

export const logout = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include'
    });
    return res.json();
}

export const useLogout = (options?: Omit<UseMutationOptions<any, unknown, void, unknown>, "mutationFn"> | undefined) => useMutation(logout, options);