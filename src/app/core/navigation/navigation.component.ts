import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { IAuth } from '../../interfaces/auth';

@Component({
    selector: 'ul[app-navigation]',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit
{
    auth: IAuth | null;
    
    constructor( private localStore: LocalService )
    {
        this.auth   = null;
    }
    
    ngOnInit(): void
    {
        this.auth   = this.localStore.getAuth();
    }

}
