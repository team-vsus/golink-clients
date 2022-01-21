import { ControllerResponse } from "../../types"

export type SubmitFunctions = {
    submitUser: (values: RegisterData) => Promise<ControllerResponse>;
    submitVerification: (values: VerificationData) => Promise<ControllerResponse>;
    submitCompany: (values: CompanyData) => Promise<ControllerResponse>;
}

export type RegisterData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export type LoginData = {
    email: string;
    password: string;
}

export type VerificationData = {
    code: string;
}

export type CompanyData = {
    name: string;
    websiteUrl: string;
    address: string;
    phone: string;
    country: string;
}

export type AuthUser = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}