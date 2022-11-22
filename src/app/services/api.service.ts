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
     
    login( formData: any, successCallback: any, errorCallback: any )
    {
        var credentials = {
            username: formData.username,
            password: formData.password
        };
  
        return this.restangular.one( 'login_check' ).post( credentials );
    }
    
    register( formData: any, successCallback: any, errorCallback: any )
    {
    
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
        let apiToken    = this.getApiToken();
        
        return this.restangular.all( "my-tablatures" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiToken}
        );
    }
    
    loadMyFavorites( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        let apiToken    = this.getApiToken();
        
        return this.restangular.all( "my-favorites" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiToken}
        );
    }
    
    addToFavorites( tabId: number )
    {
        let apiToken    = this.getApiToken();
        
        var body = {
            apiToken: apiToken,
            tabId: tabId
        };
  
        return this.restangular.one( 'add-to-favorites' ).post( body );
    }

}
