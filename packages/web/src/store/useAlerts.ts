import { combine } from 'zustand/middleware'
import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { AlertType } from '../types';

export type Alert = {
    id: string;
    message: string;
    alertType: AlertType;
    timeout: number;
}


type State = {
    alerts: Alert[];
    add: (message: string, alertType: AlertType, timeout?: number) => void;
    remove: (id: string) => void;
}

export const useAlerts = create<State>((set) => ({
    alerts: [] as Alert[],
    add: (message: string, alertType: AlertType, timeout = 3) => set((state) => {
        const id = uuidv4();

        setTimeout(() => {
            state.remove(id);
        }, timeout * 1000);

        return ({ alerts: [...state.alerts, { id, message, alertType, timeout }] })
    }),
    remove: (id: string) => set((state) => ({ alerts: state.alerts.filter(alert => alert.id !== id) }))
}))