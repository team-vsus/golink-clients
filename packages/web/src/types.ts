export type AlertType = "info" | "warning" | "success" | "error" | undefined;
export type LinkItem = {
    title: string;
    icon: any;
    to: string;
}

export type JobAd = {
    id: number;
    name: string;
    description: string;
    salary: number;
    applicantsCounts?: number;
    country: string;
    city: string;
    open: boolean;
    createdAt: string;
}

export type Conversation = {
    id: number;
    name: string;
    candidate_id: number;
    recruiter_id: number;
    date: Date;
}

export type Message = {
    id: number;
    firstname: string;
    lastname: string;
    date: string;
    content: string
}

export type Application = {
    id: string;
    name: string;
    apiKey: string;
}