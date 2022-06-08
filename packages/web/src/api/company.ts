import { useMutation, UseMutationOptions } from "react-query";
import { BASE_URL } from "../constants";

export const getCompany = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/users/company/`, {
        method: 'GET',
        credentials: 'include'
    });
    return res.json();
}
