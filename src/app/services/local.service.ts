import { Injectable } from '@angular/core';
import { IAuth } from '../interfaces/auth';

/**
 * Manual: https://blog.jscrambler.com/working-with-angular-local-storage/
 *===========================================================================
 * In Manual has How to decrypt data if its contains sensitive information
 */
@Injectable({
    providedIn: 'root'
})
export class LocalService
{
    authKey = "auth";
    
    constructor() { }
    
    public createAuth( value: string )
    {
        localStorage.setItem( this.authKey, JSON.stringify( value ) );
    }
    
    public getAuth(): IAuth | null
    {   let authData    = localStorage.getItem( this.authKey );
    
        return authData ? JSON.parse( authData ) : null;
    }
    
    public removeAuth()
    {
        localStorage.removeItem( this.authKey );
    }
}
