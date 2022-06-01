import { combine } from 'zustand/middleware'
import create from 'zustand'

type Temp = {};
type Selection = Temp | null;

export const useSelectedConv = create(
    combine(
        {
            selectedConv: null as Selection,
        },
        (set) => ({ selectConv: (conv: Selection) => set((state) => ({ selectedConv: conv })) })
    ),
);