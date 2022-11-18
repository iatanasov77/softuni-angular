import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../../services/api.service';

declare var $: any;

@Component({
    selector: 'app-user-logout',
    templateUrl: './user-logout.component.html',
    styleUrls: []
})
export class UserLogoutComponent implements OnInit {

    constructor(
        private apiService: ApiService
    ) { }
    
    ngOnInit(): void
    {
    }
    
    logoutHandler( event: any )
    {
        event.preventDefault();
        
        this.apiService.logout();
    };
}
