import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

declare var $: any;

@Component({
  selector: 'app-tablature-create',
  templateUrl: './tablature-create.component.html',
  styleUrls: []
})
export class TablatureCreateComponent implements OnInit
{
    errorFetcingData = false;
    
    tablatureForm    = this.fb.group({
        published: [false, []],
        
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
        
        tablature: ['', [Validators.required]],
        tablatureSource: [new Blob(), [Validators.required]],
    });
    
    constructor( private apiService: ApiService, private router: Router, private fb: FormBuilder ) { }

    ngOnInit(): void {
        
    }

    clearForm()
    {
        this.tablatureForm.setValue({
            published: false,
            artist: '',
            song: '',
            tablature: '',
            tablatureSource: new Blob()
        });
    }
    
    onCheckboxChange( e: any )
    {
        this.tablatureForm.patchValue({
            published: e.target.checked
        });
    }
    
    onSelectTablatureFile( e: any ): boolean
    {
        let file;
        
        if ( e.target.files.length > 0 ) {
            file = e.target.files[0];
            
            this.tablatureForm.patchValue({
                tablatureSource: file
            });
        } else {
            return false;
        }
        
        if ( file.size > 1000000 ) { // Size > 1 MB ( Gore-Dolo :) )
            $( '#ErrorApplicationAlertsBody' ).html( 'Too Big Tablature File Size !!! ' );
            $( '#ErrorApplicationAlerts' ).removeClass( 'd-none' );
            $( '#ErrorApplicationAlerts' ).addClass( 'show' );
            
            return false;
        }
        $( '#tablature_form_tablature_label' ).html( file.name );
        
        return true;
    };
    
    handleSubmit(): void
    {
        let formData    = new FormData();
        
        let published   = this.tablatureForm.get( 'published' )?.value;
        let tabFile     = this.tablatureForm.get( 'tablatureSource' )?.value;
        
        formData.append( 'published', String( published ) );
        formData.append( 'artist', String( this.tablatureForm.get( 'artist' )?.value ) );
        formData.append( 'song', String( this.tablatureForm.get( 'song' )?.value ) );
        formData.append( 'tablature', tabFile as Blob );
        
        this.apiService.createTablature( formData ).subscribe({
            next: ( response: any ) => {
                //console.log( response );
                this.clearForm();
                
                this.router.navigate(['/my-tablatures'])
                    .then(() => {
                        window.location.reload();
                    });
            },
            error: ( err: any ) => {
                this.errorFetcingData = true;
                console.error( err );
            }
        });
    };
}
