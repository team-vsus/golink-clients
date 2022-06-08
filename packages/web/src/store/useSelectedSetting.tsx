import { combine } from 'zustand/middleware'
import create from 'zustand'
import { Conversation } from '../types';

type Selection = Conversation | null;

export const useSelectedSetting = create(
    combine(
        {
            selectedConv: null as Selection,
        },
        (set) => ({ selectConv: (conv: Selection) => set((state) => ({ selectedConv: conv })) })
    ),
);