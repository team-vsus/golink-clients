import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../constants";
import { Message } from "../types";

export const getChannels = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/channels/user/`, {
        method: 'GET',
        credentials: 'include'
    });
    if (res.status === 200)
        return res.json();
    throw new Error("Something happened");
}

export const getMessagesByChannel = async (id: number) => {
    const res = await fetch(`${BASE_URL}/api/v1/messages/${id}`, {
        method: 'GET',
        credentials: 'include'
    });
    if (res.status === 200)
        return res.json();
    throw new Error("Something happened");
}

export const createMessage = async (message: Message) => {
    const res = await fetch(`${BASE_URL}/api/v1/messages`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(message)
    });
    if (res.status === 200)
        return res.json();
    throw new Error("Something happened");
}

export const useCreateMessage = (options?: Omit<UseMutationOptions<any, unknown, any, unknown>, "mutationFn"> | undefined) => {
    return useMutation(createMessage, options);
}