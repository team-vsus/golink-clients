import { combine } from 'zustand/middleware'
import create from 'zustand'
import {AuthUser} from '@golink-clients/common'

export const useAuth = create(
    combine(
        {
            user: null as AuthUser | null,
            isAuthenticated: false
        },
        (set, get) => ({
            authenticate: (user: AuthUser) => set((state) => {
                return { user, isAuthenticated: true }
            }),
        })
    ),
)