import { combine } from 'zustand/middleware'
import create from 'zustand'

export const useNavsize = create(
    combine(
        {
            isNavOpen: false,
        },
        (set) => ({ setNavOpen: (open: boolean) => set((state) => ({ isNavOpen: open })) })
    ),
);