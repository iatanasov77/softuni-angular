import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
    selector: 'ul[app-navigation]',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit
{
    isLoggedIn: boolean;
    
    constructor( private localStore: LocalService )
    {
        this.isLoggedIn = this.localStore.isLoggedIn();
    }
    
    ngOnInit(): void
    {
        //this.isLoggedIn = this.localStore.isLoggedIn();
    }

}
