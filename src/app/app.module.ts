import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { SharedModule } from './shared/shared.module';
import { PlayerModule } from './tablature-player/player.module';
import { TablaturesModule } from './tablatures/tablatures.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { RestangularModule } from 'ngx-restangular';
import { environment } from '../environments/environment';

export function RestangularConfigFactory ( RestangularProvider: any ) {
    RestangularProvider.setBaseUrl( environment.backendURL + '/api' );
    
    RestangularProvider.addResponseInterceptor( ( data: any, operation: any ) => {
        function populateHref( _data: any ) {
            if ( _data['@id'] ) {
                _data.href = _data['@id'].substring( 5 );
            }
        }
        populateHref( data );
        
        if ( ['get', 'getList'].includes( operation ) ) {
            const collectionResponse = data['hydra:member'];
            //console.log( data );
            
            if ( collectionResponse ) {
                collectionResponse.metadata = {};
                
                for ( const key in data ) {
                    if ( 'hydra:member' !== key && data.hasOwnProperty( key ) ) {
                        collectionResponse.metadata[key] = data[key];
                    }
                }
                
                for ( const element of collectionResponse ) {
                    populateHref( element );
                }
                
                return collectionResponse;
            }
        }
        
        return data;
    });
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        RestangularModule.forRoot( RestangularConfigFactory ),
        
        SharedModule,
        PlayerModule,
        TablaturesModule,
        AuthenticationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
