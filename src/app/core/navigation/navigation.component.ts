import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
    selector: 'ul[app-navigation]',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit
{
    isLoggedIn: boolean = false;
    
    constructor( private localStore: LocalService, private router: Router )
    {
        this.localStore.isLoggedIn().subscribe( isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        });
    }
    
    ngOnInit(): void
    {
        
    }
}
