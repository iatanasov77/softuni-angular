import { IUser } from "./user";

export interface ITablature
{
    id: number;
    artist: string;
    song: string;
    enabled: boolean;
    
    tablatureFile: any;
    
    user: any;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    
    __v: number;
}
