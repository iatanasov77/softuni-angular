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
        let apiKeky     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Njg3NTgxMDcsImV4cCI6MTY2ODc2MTcwNywicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.iy4PqXu4D0QPYHByRHcdo6Oe09t-FbaTgYehAthluc77UoG04LfUFn8Xq0cI1QM5oqp-1Oa6AeGGy6rG5MHrA-xQHxeHB7tXK2TqgtCdpKt1gKn0q1Yqx7yNbx2yRkzx-qY2DCAfJNuCj9O4TSr0Fh_zqTZdkX4O77haXhi_SjVUqDaPZbvEaaeSpnSwmBfawWgPthbErY8RQB_t0hmEulvM-l5GiWph0aHBsl1vVTaxa8XqddfPV5FTg_b3qumZIuu_qtt1lYgRrx6onHBavJU7pnGOGbKFfPF4ZsMN7GvnvylDXQhK3K4sDWDo3vQASHGS80HV1DV_c1-eGGP_ZA';
        
        return this.restangular.all( "my-tablatures" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiKeky}
        );
    }
    
    loadMyFavorites( limit?: number )
    {
        let limitParam  = limit ? limit : '';
        let apiKeky     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Njg3NTgxMDcsImV4cCI6MTY2ODc2MTcwNywicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.iy4PqXu4D0QPYHByRHcdo6Oe09t-FbaTgYehAthluc77UoG04LfUFn8Xq0cI1QM5oqp-1Oa6AeGGy6rG5MHrA-xQHxeHB7tXK2TqgtCdpKt1gKn0q1Yqx7yNbx2yRkzx-qY2DCAfJNuCj9O4TSr0Fh_zqTZdkX4O77haXhi_SjVUqDaPZbvEaaeSpnSwmBfawWgPthbErY8RQB_t0hmEulvM-l5GiWph0aHBsl1vVTaxa8XqddfPV5FTg_b3qumZIuu_qtt1lYgRrx6onHBavJU7pnGOGbKFfPF4ZsMN7GvnvylDXQhK3K4sDWDo3vQASHGS80HV1DV_c1-eGGP_ZA';
        
        return this.restangular.all( "my-favorites" ).customGET( '',
            {itemsPerPage: limitParam},
            {Authorization: 'Bearer ' + apiKeky}
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
