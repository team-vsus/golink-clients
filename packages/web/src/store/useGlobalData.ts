import { combine, persist } from 'zustand/middleware'
import create from 'zustand'
import { Application, Conversation, JobAd, Message } from '../types';
import { genId } from '../utils/utils';
import { DateTime } from 'luxon';


type State = {
    jobs: JobAd[];
    addJob: (job: JobAd) => void;
    //removeJob: (id: string) => void;
    conversations: Conversation[];
    addConv: (conv: Conversation) => void;
    messages: Message[];
    //addMessage: (id: number, msg: Message) => void;
    applications: Application[];
    addApplication: (app: Application) => void;
}


export const useGlobalData = create<State>((set) => ({
    jobs: [],
    addJob: (job: JobAd) => set((state) => {
        return { jobs: [...state.jobs, job] };
    }),
    //removeJob: (id: string) => set((state) => ({ jobs: state.jobs.filter(job => job.id !== id) })),
    conversations: [],
    addConv: (conv: Conversation) => set((state) => {
        return { conversations: [...state.conversations, conv] };
    }),
    messages: [],
    /*addMessage: (id: number, msg: Message) => set((state) => {
        return { conversations: [...state.conversations.map(c => c.id === id ? { ...c, messages: [...c.messages, msg] } : c)] };
    }),*/
    applications: [],
    addApplication: (application: Application) => set((state) => {
        return { applications: [...state.applications, application] }
    })
}))