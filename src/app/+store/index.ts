import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import {
    loadLatestTablaturesSuccess,
    loadMyTablaturesSuccess,
    loadMyFavoritesSuccess,
    loadTablatureSuccess
} from "./actions";

import { ITablature } from '../interfaces/tablature';

export interface IMainState
{
    latestTablatures:   null | ITablature[];
    myTablatures:       null | ITablature[];
    myFavorites:        null | ITablature[];
    tablature:          null | ITablature;
}

interface IAppState
{
    main: IMainState;
    router: ReturnType<typeof routerReducer>
}

const mainInitialState: IMainState = {
    latestTablatures:   null,
    myTablatures:       null,
    myFavorites:        null,
    tablature:          null
};

const mainReducer = createReducer<IMainState>(
    mainInitialState,
    
    on( loadLatestTablaturesSuccess, ( state, { latestTablatures } ) => {
      return { ...state, latestTablatures };
    }),
    
    on( loadMyTablaturesSuccess, ( state, { myTablatures } ) => {
      return { ...state, myTablatures };
    }),
    
    on( loadMyFavoritesSuccess, ( state, { myFavorites } ) => {
      return { ...state, myFavorites };
    }),
    
    on( loadTablatureSuccess, ( state, { tablature } ) => {
      return { ...state, tablature };
    })
);

export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer,
};
