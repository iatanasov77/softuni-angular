import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

import { ApiService } from '../../services/api.service';

declare var $: any;

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: []
})
export class UserRegisterComponent implements OnInit
{
    registrationTac: boolean = false;
    
    checkPasswords: ValidatorFn = ( group: AbstractControl ):  ValidationErrors | null => {
        let pass = group?.get( 'password' )?.value;
        let confirmPass = group?.get( 'confirmPassword' )?.value
        
        return pass === confirmPass ? null : { notSame: true }
    }
    
    registerForm    = this.fb.group({
        tac: [false, Validators.requiredTrue],
        
        username: ['', [Validators.required, Validators.minLength( 6 )]],
        
        email: ['', [Validators.required, Validators.email]],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
    });
    
    passwordGroup   = this.fb.group({
        password: ['', [Validators.required, Validators.minLength( 6 )]],
        confirmPassword: ['']
    }, { validators: this.checkPasswords });
    
    constructor( private apiService: ApiService, private router: Router, private fb: FormBuilder ) { }
    
    ngOnInit(): void
    {
    }
    
    ngOnDestroy(): void
    {
        this.registrationTac    = false;
    }
    
    handleSubmit(): void
    {
        if ( ! this.registrationTac || this.registerForm.invalid || this.passwordGroup.invalid ) {
            $( '#registrationFormError' ).removeClass( 'd-none' );
            $( '#registrationFormError' ).addClass( 'show' );
            
            return;
        }
        
        this.apiService.register( this.createRegisterPayload( this.registerForm.value, this.passwordGroup.value ) ).subscribe({
            next: ( response: any ) => {
                this.router.navigate(['/latest-tablatures'])
                    .then(() => {
                        //window.location.reload();
                    });
            },
            error: ( err: any ) => {
                
                console.error( err );
            }
        });
    }
    
    onCheckboxChange( e: any )
    {
        this.registrationTac    = e.target.checked;
    }
    
    createRegisterPayload( formData: any, passwordGroup: any )
    {
        return {
            "email": formData.username + "@softuni-api.lh/",
            "username": formData.username,
            "password": passwordGroup.password,
            "firstName": formData.first_name,
            "lastName": formData.last_name
        };
    }
}
