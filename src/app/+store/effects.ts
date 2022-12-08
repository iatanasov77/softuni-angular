import { Injectable } from "@angular/core";

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from "rxjs";

import {
    loadLatestTablatures,
    loadLatestTablaturesFailure,
    loadLatestTablaturesSuccess,
    
    loadMyTablatures,
    loadMyTablaturesFailure,
    loadMyTablaturesSuccess,
    
    loadMyFavorites,
    loadMyFavoritesFailure,
    loadMyFavoritesSuccess
} from "./actions";

import { ApiService } from "../services/api.service";
import { ITablature } from '../interfaces/tablature';


/**
 * Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such 
 * as network requests, web socket messages and time-based events.
 * 
 * In a service-based Angular application, components are responsible for interacting with external resources directly through services. Instead, effects provide a way 
 * to interact with those services and isolate them from the components. Effects are where you handle tasks such as fetching data, long-running tasks that produce 
 * multiple events, and other external interactions where your components don't need explicit knowledge of these interactions.
 */

@Injectable({
    providedIn: 'root'
})
export class Effects
{
    constructor( private actions$: Actions, private apiService: ApiService ) { }
    
    loadLatestTablatures = createEffect( (): any => this.actions$.pipe(
        ofType( loadLatestTablatures ),
        switchMap( ( { limit } ) => this.apiService.loadLatestTablatures( limit ).pipe(
            map( ( latestTablatures: ITablature[] ) => loadLatestTablaturesSuccess( { latestTablatures } ) ),
            catchError( error => [loadLatestTablaturesFailure( { error } )] )
        ))
    ));
    
    loadMyTablatures = createEffect( (): any => this.actions$.pipe(
        ofType( loadMyTablatures ),
        switchMap( ( { limit } ) => this.apiService.loadMyTablatures( limit ).pipe(
            map( ( myTablatures: ITablature[] ) => loadMyTablaturesSuccess( { myTablatures } ) ),
            catchError( error => [loadMyTablaturesFailure( { error } )] )
        ))
    ));
    
    loadMyFavorites = createEffect( (): any => this.actions$.pipe(
        ofType( loadMyFavorites ),
        switchMap( ( { limit } ) => this.apiService.loadMyFavorites( limit ).pipe(
            map( ( myFavorites: ITablature[] ) => loadMyFavoritesSuccess( { myFavorites } ) ),
            catchError( error => [loadMyFavoritesFailure( { error } )] )
        ))
    ));
}