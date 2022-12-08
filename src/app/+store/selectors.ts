import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IMainState } from './index';
import { RouterStateUrl } from './router';

const mainSelector                  = createFeatureSelector<IMainState>( 'main' );
const routerSelector                = createFeatureSelector<{ state: RouterStateUrl }>( 'router' );

export const getUrl                 = createSelector( routerSelector, s => s?.state?.url );
export const getRouteParams         = createSelector( routerSelector, s => s?.state?.params );

export const getLatestTablatures    = createSelector( mainSelector, s => s.latestTablatures );
export const getMyTablatures        = createSelector( mainSelector, s => s.myTablatures );
export const getMyFavorites         = createSelector( mainSelector, s => s.myFavorites );
export const getTablature           = createSelector( mainSelector, s => s.tablature );

