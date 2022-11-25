import { IUser } from "./user";

export interface ITablature
{
    id: number;
    artist: string;
    song: string;
    enabled: boolean;
    
    user: any;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
    
    __v: number;
}
