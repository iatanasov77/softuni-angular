import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../../services/api.service';

declare var $: any;

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    isLogged = true;
  
    constructor(
        private apiService: ApiService
    ) { }
    
    ngOnInit(): void
    {
    }
    
    onSubmit( f: NgForm )
    {
        let formData = f.value;
          
        this.apiService.login(
            formData,
            function( response: any ) {
                //console.log( response );
                //userMakeLogin( response.resource );
                
                //navigate( '/tablatures' );
                $( '#btnLoginForm' ).dropdown( 'toggle' );
            },
            function() {
                console.log( 'AJAX ERROR !!!' );
            }
        );
          
        f.reset();
    };
    
    onClickRegistration(): void
    {
        $( '#btnLoginForm' ).dropdown( 'toggle' );
    };
}
