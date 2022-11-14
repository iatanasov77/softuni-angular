import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ul[app-navigation]',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit
{
    isLoggedIn    = false;
    
    constructor() { }
    
    ngOnInit(): void {
    }

}
