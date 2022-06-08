import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../constants";

export const getALlCandidates = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/candidates/`, {
        method: 'GET',
        credentials: 'include'
    });
    return res.json();
}

console.log("ich muss dafür jetzt einen select mit 2 joins machen")