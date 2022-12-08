import { createAction, props } from "@ngrx/store";
import { ITablature } from '../interfaces/tablature';

const actionTypes = {
    loadLatestTablatures:           'LOAD_LATEST_TABLATURES',
    loadLatestTablaturesSuccess:    'LOAD_LATEST_TABLATURES_SUCCESS',
    loadLatestTablaturesFailure:    'LOAD_LATEST_TABLATURES_FAILURE',
    
    loadMyTablatures:               'LOAD_MY_TABLATURES',
    loadMyTablaturesSuccess:        'LOAD_MY_TABLATURES_SUCCESS',
    loadMyTablaturesFailure:        'LOAD_MY_TABLATURES_FAILURE',
    
    loadMyFavorites:                'LOAD_MY_FAVORITES',
    loadMyFavoritesSuccess:         'LOAD_MY_FAVORITES_SUCCESS',
    loadMyFavoritesFailure:         'LOAD_MY_FAVORITES_FAILURE',
    
    loadTablature:                  'LOAD_TABLATURE',
    loadTablatureSuccess:           'LOAD_TABLATURE_SUCCESS',
    loadTablatureFailure:           'LOAD_TABLATURE_FAILURE',
};


export const loadLatestTablatures           = createAction( actionTypes.loadLatestTablatures, props<{ limit?: number }>() );
export const loadLatestTablaturesSuccess    = createAction( actionTypes.loadLatestTablaturesSuccess, props<{ latestTablatures: ITablature[] }>() );
export const loadLatestTablaturesFailure    = createAction( actionTypes.loadLatestTablaturesFailure, props<{ error: any }>() );

export const loadMyTablatures               = createAction( actionTypes.loadMyTablatures, props<{ limit?: number }>() );
export const loadMyTablaturesSuccess        = createAction( actionTypes.loadMyTablaturesSuccess, props<{ myTablatures: ITablature[] }>() );
export const loadMyTablaturesFailure        = createAction( actionTypes.loadMyTablaturesFailure, props<{ error: any }>() );

export const loadMyFavorites                = createAction( actionTypes.loadMyFavorites, props<{ limit?: number }>() );
export const loadMyFavoritesSuccess         = createAction( actionTypes.loadMyFavoritesSuccess, props<{ myFavorites: ITablature[] }>() );
export const loadMyFavoritesFailure         = createAction( actionTypes.loadMyFavoritesFailure, props<{ error: any }>() );

export const loadTablature                  = createAction( actionTypes.loadTablature, props<{ tabId: number }>() );
export const loadTablatureSuccess           = createAction( actionTypes.loadTablatureSuccess, props<{ tablature: ITablature }>() );
export const loadTablatureFailure           = createAction( actionTypes.loadTablatureFailure, props<{ error: any }>() );
