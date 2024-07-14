import { Component, OnInit } from '@angular/core';

import { LocalService } from '../../services/local.service';
import { IAuth } from '../../interfaces/auth';
import { ITablature } from '../../interfaces/tablature';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge, Subscription } from 'rxjs';

import { loadMyTablatures, loadMyTablaturesFailure, loadMyTablaturesSuccess } from '../../+store/actions';
import { getMyTablatures } from '../../+store/selectors';

@Component({
    selector: 'app-my-tablatures',
    templateUrl: './my-tablatures.component.html',
    styleUrls: []
})
export class MyTablaturesComponent implements OnInit
{
    auth?: IAuth | null = null;
    
    showSpinner = true;
    tablatures$ = this.store.select( getMyTablatures );
    tablatures: ITablature[] = [];
    
    isFetchingTablatures$ = merge(
        this.actions$.pipe(
            ofType( loadMyTablatures ),
            map( () => true )
        ),
        this.actions$.pipe(
            ofType( loadMyTablaturesSuccess ),
            map( () => false )
        ),
        this.actions$.pipe(
            ofType( loadMyTablaturesFailure ),
            map( () => false )
        )
    );
    
    constructor( private localStore: LocalService, private store: Store, private actions$: Actions )
    {
        this.store.dispatch( loadMyTablatures( { limit: 10 } ) );
        this.store.subscribe( ( state: any ) => {
            this.showSpinner    = state.main.myTablatures == null;
            if ( state.main.myTablatures ) {
            	let tablatures	= Object.values( state.main.myTablatures );
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
        this.auth   	= this.localStore.getAuth();
    }
}
