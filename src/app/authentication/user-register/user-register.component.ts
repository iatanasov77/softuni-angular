import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../../services/api.service';

declare var $: any;

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit
{
    registration: any    = {
        username: '',
        password: '',
        password_repeat: '',
        tac: false,
    }
    
    hasError?: boolean;
    formData: any;
    
    constructor( private apiService: ApiService ) { }
    
    ngOnInit(): void
    {
    }
    
    onSubmit( f: NgForm )
    {
        this.hasError    = f.valid as boolean;
        this.formData    = f.value;
        
           
        if ( this.hasError ) {
            $( '#registrationFormError' ).removeClass( 'd-none' );
            $( '#registrationFormError' ).addClass( 'show' );
            return;
        }
        
        this.apiService.register(
            this.formData,
            function( response: any ) {
                console.log( response );
                
                //userMakeLogin( response.resource );
                //navigate( '/tablatures' );
            },
            function() {
                console.log( 'AJAX ERROR !!!' );
            }
        );
        
        f.reset();
    }
    
    onCheckboxChange( e: any )
    {
        this.registration.tac    = e.target.checked;
    }
}
