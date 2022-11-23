import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-user-logout',
    templateUrl: './user-logout.component.html',
    styleUrls: []
})
export class UserLogoutComponent implements OnInit {

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }
    
    ngOnInit(): void
    {
    }
    
    logoutHandler( event: any )
    {
        event.preventDefault();
        
        this.apiService.logout();
        this.router.navigate(['/latest-tablatures'])
                    .then(() => {
                        window.location.reload();
                    });
    };
}
