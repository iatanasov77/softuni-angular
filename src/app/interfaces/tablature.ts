import { IUser } from "./user";

export interface ITablature
{
    id: number;
    artist: string;
    song: string;
    enabled: boolean;
    
    //userId: IUser;
    owner: string
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
    
    __v: number;
}
