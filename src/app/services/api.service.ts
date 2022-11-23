import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Restangular } from 'ngx-restangular';

import { LocalService } from './local.service';
import { environment } from '../../environments/environment';
import { ITablature } from '../interfaces/tablature';

const backendURL = environment.backendURL;

/**
 * Restangular Manual: https://github.com/2muchcoffeecom/ngx-restangular
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService
{
    constructor(
        private httpClient: HttpClient,
        private restangular: Restangular,
        private localStore: LocalService
    ) { }
    
    /*
     * Centralize Get Api Token To Can Check if Expired and someday to use a reffreah token
     * ===========================================================================================
     *      https://github.com/markitosgv/JWTRefreshTokenBundle
     *      https://symfony.com/bundles/LexikJWTAuthenticationBundle/current/index.html#about-token-expiration
     */
     getApiToken(): string
     {
        let auth        = this.localStore.getAuth();
        
        return auth ? auth.apiToken : '';
     }
     
    login( credentials: any )
    {
        return this.restangular.all( "login_check" ).post( credentials );
    }
    
    register( formData: any )
    {
        return this.restangular.all( "users/register" ).post( formData );
    }
    
    logout()
    {
        // Need to Logout From Api Server
    
        this.localStore.removeAuth();
    }
    
    loadLatestTablatures( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        
        return this.restangular.all( "latest-tablatures" ).customGET( '',
            {enabled: 1, itemsPerPage: limitParam}
        );
    }
    
    loadMyTablatures( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        
        return this.restangular.all( "my-tablatures" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + this.getApiToken()}
        );
    }
    
    loadMyFavorites( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        
        return this.restangular.all( "my-favorites" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + this.getApiToken()}
        );
    }
    
    addToFavorites( tabId: number )
    {
        let body = {
            apiToken: this.getApiToken(),
            tabId: tabId
        };
  
        return this.restangular.one( 'add-to-favorites' ).post( body );
    }

}
