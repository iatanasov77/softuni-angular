import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge } from 'rxjs';
import { loadMyFavorites, loadMyFavoritesFailure, loadMyFavoritesSuccess } from '../../+store/actions';
import { getMyFavorites } from '../../+store/selectors';
import { ITablature } from '../../interfaces/tablature';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: []
})
export class FavoritesComponent implements OnInit
{
    showSpinner = true;
    tablatures$ = this.store.select( getMyFavorites );
    tablatures: ITablature[] = [];
    
    isFetchingTablatures$ = merge(
        this.actions$.pipe(
            ofType( loadMyFavorites ),
            map( () => true )
        ),
        this.actions$.pipe(
            ofType( loadMyFavoritesSuccess ),
            map( () => false )
        ),
        this.actions$.pipe(
            ofType( loadMyFavoritesFailure ),
            map( () => false )
        )
    );
    
    constructor( private store: Store, private actions$: Actions )
    {
        this.store.dispatch( loadMyFavorites( { limit: 10 } ) );
        this.store.subscribe( ( state: any ) => {
            this.showSpinner    = state.main.myFavorites == null;
            if ( state.main.myFavorites ) {
            	let tablatures	= Object.values( state.main.myFavorites );
            	for ( let i = 0; i < tablatures.length; i++ ) {
            		if ( typeof tablatures[i] === 'object' ) {
            			if ( ( tablatures[i] as ITablature ).hasOwnProperty( 'artist' ) ) {
            				this.tablatures.push( tablatures[i] as ITablature );
            			}
            		}
            	}
            }
        });
    }
    
    ngOnInit(): void
    {
        
    }
}
