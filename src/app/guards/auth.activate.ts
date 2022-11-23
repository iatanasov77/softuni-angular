import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { LocalService } from '../services/local.service';

@Injectable({
    providedIn: 'root'
})
export class AuthActivate implements CanActivate
{
    constructor( private localStore: LocalService, private router: Router ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loginRequired = route.data['loginRequired'];
        const loggedIn      = this.localStore.getAuth() ? true : false;
        
        if ( loginRequired === undefined || loggedIn === loginRequired ) {
            return true;
        }
        
        return this.router.parseUrl( '/latest-tablatures' );
    }
}