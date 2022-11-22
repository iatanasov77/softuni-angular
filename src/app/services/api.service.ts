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
        let auth        = this.localStore.getAuth();
        let apiToken    = auth ? auth.apiToken : '';
        
        return this.restangular.all( "my-tablatures" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiToken}
        );
    }
    
    loadMyFavorites( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        let auth        = this.localStore.getAuth();
        let apiToken    = auth ? auth.apiToken : '';
        
        return this.restangular.all( "my-favorites" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiToken}
        );
    }
    
    addToFavorites( apiToken: string, tabId: number )
    {
        var body = {
            apiToken: apiToken,
            tabId: tabId
        };
  
        return this.restangular.one( 'add-to-favorites' ).post( body );
    }

}
