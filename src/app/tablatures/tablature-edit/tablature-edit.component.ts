import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

declare var $: any;

@Component({
    selector: 'app-tablature-edit',
    templateUrl: './tablature-edit.component.html',
    styleUrls: []
})
export class TablatureEditComponent implements OnInit
{
    private sub: any;
    
    tablature?: ITablature;
    errorFetcingData = false;
    
    tablatureFileOriginalName: any;
    tablatureForm    = this.fb.group({
        published: [false, []],
        
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
        
        tablature: ['', [Validators.required]],
        tablatureSource: ['', [Validators.required]],
    });
    
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let tabId    = +params['id']; // (+) converts string 'id' to a number
            
            this.apiService.loadTablature( tabId ).subscribe({
                next: ( response: any ) => {
                    this.tablature = response;
                    
                    this.tablatureFileOriginalName  = response?.tablatureFile?.originalName;
                    this.tablatureForm.setValue({
                        published: response.enabled,
                        artist: response.artist,
                        song: response.song,
                        
                        tablature: '',
                        tablatureSource: ''
                    });
                },
                error: ( err: any ) => {
                    this.errorFetcingData = true;
                    console.error( err );
                }
            });
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
        
        this.tablatureFileOriginalName  = file.name;
        $( '#tablature_form_tablature_label' ).html( file.name );
        
        return true;
    };
    
    handleSubmit(): void
    {
        let formData = new FormData();
        
        let published   = this.tablatureForm.get( 'published' )?.value;
        //alert( published );
        formData.append( '_method', 'PUT' );
        formData.append( 'published', published );
        formData.append( 'artist', this.tablatureForm.get( 'artist' )?.value );
        formData.append( 'song', this.tablatureForm.get( 'song' )?.value );
        formData.append( 'tablature', this.tablatureForm.get( 'tablatureSource' )?.value );
        
        if ( this.tablature && this.tablature.id ) {
            this.apiService.updateTablature( this.tablature.id, formData ).subscribe({
                next: ( response: any ) => {
                    //console.log( response );
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
        }
    };
}
