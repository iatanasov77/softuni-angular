import { ITablature } from './tablature';

export interface IUser
{
    tablatures: ITablature[];
    
    id: number;
    email: string;
    
    username: string;
    password: string;
    
    info: any
    
    __v: number;
}