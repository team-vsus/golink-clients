import { combine } from 'zustand/middleware'
import create from 'zustand'

export const useIsApplicant = create(
    combine(
        {
            isApplicant: false,
        },
        (set) => ({ setApplicant: (applicant: boolean) => set((state) => ({ isApplicant: applicant })) })
    ),
);