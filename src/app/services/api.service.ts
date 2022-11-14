import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { ITablature } from '../interfaces/tablature';

/**
 * Restangular Manual: https://github.com/2muchcoffeecom/ngx-restangular
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService
{
    constructor( private restangular: Restangular ) { }
    
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
    
    loadLatestTablatures( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        
        return this.restangular.all( "latest-tablatures", {enabled: 1, itemsPerPage: limitParam} ).getList();
    }

}
