import { Feature } from "./Feature";

export interface Service{
    id: number;
    documentId: string;
    name: string;
    image: string;
    content: string;
    features?: Feature[] | null;
    createdAt: string;
    updatedAt: string;
}