import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge } from 'rxjs';
import { loadMyFavorites, loadMyFavoritesFailure, loadMyFavoritesSuccess } from '../../+store/actions';
import { getMyFavorites } from '../../+store/selectors';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: []
})
export class FavoritesComponent implements OnInit
{
    tablatures$ = this.store.select( getMyFavorites );
    
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
    }
    
    ngOnInit(): void
    {
        
    }
}
