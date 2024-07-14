import { IUser } from "./user";

export interface ITablature
{
    id: number;
    artist: string;
    song: string;
    enabled: boolean;
    
    tablatureFile: any;
    
    user: any;
    createdAt: string;
    updatedAt: string;
    
    __v: number;
}
