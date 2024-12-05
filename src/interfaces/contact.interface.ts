import { Group } from "./group.interface";

export interface Contact extends ContactCreate {
    id: number;
    group: Group | null;
}


export interface ContactCreate {
    name: string;
    email: string;
    phone: string;
    address: string;
    groupId: number;
}