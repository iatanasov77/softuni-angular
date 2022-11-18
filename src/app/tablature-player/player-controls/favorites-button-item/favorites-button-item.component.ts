import { Component, Input, OnInit } from '@angular/core';
import { AlphaTabApi } from '@coderline/alphatab';
import { IAuth } from '../../../interfaces/auth';
import { ApiService } from '../../../services/api.service';

declare var $: any;

@Component({
    selector: 'favorites-button-item',
    templateUrl: './favorites-button-item.component.html',
    styleUrls: ['../player-controls.component.scss']
})
export class FavoritesButtonItemComponent implements OnInit
{
    @Input() tabId: number = 0;
    @Input() auth: IAuth | null;
    
    constructor( private apiService: ApiService )
    {
        this.auth   = null;
    }
    
    ngOnInit(): void
    {
        
    }
    
    favoriteHandler(): void
    {
        if( this.auth ) {
            this.apiService.addToFavorites( this.auth.apiToken, this.tabId ).subscribe({
                next: ( response: any ) => {
                    //console.log( response );
                    if( response.status == 'success' ) {
                        $( '#ApplicationAlerts' ).css( "left", "120px" );
                        $( '#ApplicationAlerts' ).css( "width", "90%" );
                        
                        $( '#ApplicationAlertsBody' ).html( 'This Tablature is Added to Your Favorites !' );
                        $( '#ApplicationAlerts' ).removeClass( 'd-none' );
                        $( '#ApplicationAlerts' ).addClass( 'show' );
                    } else if( response.status == 'error' ) {
                        $( '#ErrorApplicationAlertsBody' ).html( response.message );
                        $( '#ErrorApplicationAlerts' ).removeClass( 'd-none' );
                        $( '#ErrorApplicationAlerts' ).addClass( 'show' );
                    }
                },
                error: ( err: any ) => {
                    //this.errorFetcingData = true;
                    console.error( err );
                }
            });
        }
    }
}
