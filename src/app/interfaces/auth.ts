export interface IAuth
{
    id: number;
    fullName: string;
    
    apiToken: string;
    tokenCreated: number;
    tokenExpired: number;
}