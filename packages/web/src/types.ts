export type AlertType = "info" | "warning" | "success" | "error" | undefined;
export type LinkItem = {
    title: string;
    icon: any;
    to: string;
}

export type JobAd = {
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
    id: string;
    date: string;
    firstname: string;
    lastname: string;

    messages: Message[];
}

export type Message = {
    id: string;
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