import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { LocalService } from '../../services/local.service';

declare var $: any;

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: []
})
export class UserLoginComponent implements OnInit
{
    errorFetcingData = false;
    
    constructor(
        private apiService: ApiService,
        private router: Router,
        private localStore: LocalService
    ) { }
    
    ngOnInit(): void
    {
    }
    
    handleSubmit( form: NgForm ): void
    {
        if ( form.invalid ) {
            return;
        }
        
        let credentials = form.value;
        this.apiService.login( credentials ).subscribe({
            next: ( response: any ) => {
                let data    = response.payload;
                
                this.localStore.createAuth({
                    id: data.userId,
                    fullName: data.userFullName,
                    
                    apiToken: data.token,
                    tokenCreated: data.tokenCreated,
                    tokenExpired: data.tokenExpired
                });
                
                $( '#btnLoginForm' ).dropdown( 'toggle' );
                this.router.navigate(['/my-tablatures'])
                    .then(() => {
                        //window.location.reload();
                    });
            },
            error: ( err: any ) => {
                this.errorFetcingData = true;
                console.error( err );
            }
        });
    };
    
    onClickRegistration(): void
    {
        $( '#btnLoginForm' ).dropdown( 'toggle' );
    };
}
