import { type BlocksContent } from '@strapi/blocks-react-renderer';
export interface WorkItem {
    id: number;
    title: string;
    image: string;
    content: BlocksContent;
}