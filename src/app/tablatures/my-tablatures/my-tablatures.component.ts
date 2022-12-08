import { Component, OnInit } from '@angular/core';

import { LocalService } from '../../services/local.service';
import { IAuth } from '../../interfaces/auth';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge } from 'rxjs';
import { loadMyTablatures, loadMyTablaturesFailure, loadMyTablaturesSuccess } from '../../+store/actions';
import { getUrl, getMyTablatures } from '../../+store/selectors';

@Component({
    selector: 'app-my-tablatures',
    templateUrl: './my-tablatures.component.html',
    styleUrls: []
})
export class MyTablaturesComponent implements OnInit
{
    auth?: IAuth | null = null;
    
    tablatures$ = this.store.select( getMyTablatures );
    
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
    }
    
    ngOnInit(): void
    {
        this.auth   = this.localStore.getAuth();
    }
}
