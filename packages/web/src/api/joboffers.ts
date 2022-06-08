import { useMutation, UseMutationOptions, useQuery } from "react-query";
import { BASE_URL } from "../constants";
import { JobAd } from "../types";

export const getJobOffers = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/jobads`, {
        credentials: 'include'
    });
    return res.json();
}

export const useJobOffers = () => useQuery('joboffers', getJobOffers);

export const createJobOffer = async (joboffer: JobAd) => {
    const res = await fetch(`${BASE_URL}/api/v1/jobads`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(joboffer)
    });
    return res.json();
}
