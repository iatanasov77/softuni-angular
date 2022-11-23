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
    formErrors: any;
    
    constructor( private apiService: ApiService ) { }
    
    ngOnInit(): void
    {
    }
    
    onSubmit( form: NgForm ): void
    {
        if ( form.invalid ) {
            $( '#registrationFormError' ).removeClass( 'd-none' );
            $( '#registrationFormError' ).addClass( 'show' );
            return;
        }
        
        let formData = form.value;
        this.apiService.register( formData ).subscribe({
            next: ( response: any ) => {
                
                
                form.reset();
            },
            error: ( err: any ) => {
                
                console.error( err );
            }
        });
        
        
    }
    
    onCheckboxChange( e: any )
    {
        this.registration.tac    = e.target.checked;
    }
}
