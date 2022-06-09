import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../constants";

export const getAllCandidates = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/candidates/`, {
        method: 'GET',
        credentials: 'include'
    });
    return res.json();
}