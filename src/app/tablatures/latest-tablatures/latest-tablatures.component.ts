import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge } from 'rxjs';
import { loadLatestTablatures, loadLatestTablaturesFailure, loadLatestTablaturesSuccess } from '../../+store/actions';
import { getUrl, getLatestTablatures } from '../../+store/selectors';

@Component({
    selector: 'app-latest-tablatures',
    templateUrl: './latest-tablatures.component.html',
    styleUrls: []
})
export class LatestTablaturesComponent implements OnInit
{
    tablatures$ = this.store.select( getLatestTablatures );
    
    isFetchingTablatures$ = merge(
        this.actions$.pipe(
            ofType( loadLatestTablatures ),
            map( () => true )
        ),
        this.actions$.pipe(
            ofType( loadLatestTablaturesSuccess ),
            map( () => false )
        ),
        this.actions$.pipe(
            ofType( loadLatestTablaturesFailure ),
            map( () => false )
        )
    );
    
    constructor( private store: Store, private actions$: Actions )
    {
        this.store.dispatch( loadLatestTablatures( { limit: 10 } ) );
    }
    
    ngOnInit(): void
    {
        
    }
}
