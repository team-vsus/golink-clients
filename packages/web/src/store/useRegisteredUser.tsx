import { combine } from 'zustand/middleware'
import create from 'zustand'

type Selection = number | null;

export const useRegisteredUser = create(
    combine(
        {
            userId: null as Selection,
        },
        (set) => ({ setUserId: (userId: Selection) => set((state) => ({ userId: userId })) })
    ),
);