import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Restangular } from 'ngx-restangular';

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
        private restangular: Restangular
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
    
    logout( formData: any, successCallback: any, errorCallback: any )
    {
    
    }
    
    readTablature( tabId: number )
    {
        return this.httpClient.get( `${backendURL}/tablatures/${tabId}/read` );
    }
    
    loadLatestTablatures( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        
        return this.restangular.all( "latest-tablatures", {enabled: 1, itemsPerPage: limitParam} ).getList();
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
