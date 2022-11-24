import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

declare var $: any;

@Component({
  selector: 'app-tablature-create',
  templateUrl: './tablature-create.component.html',
  styleUrls: ['./tablature-create.component.scss']
})
export class TablatureCreateComponent implements OnInit {

    tablatures: ITablature[] | null = null;
    errorFetcingData = false;
    
    tablatureForm    = this.fb.group({
        published: [false, []],
        
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
        
        tablature_file: ['', [Validators.required]],
    });
    
    constructor( private apiService: ApiService, private router: Router, private fb: FormBuilder ) { }

    ngOnInit(): void {
        
    }
    
    onSelectTablatureFile( e: any ): boolean
    {
        let file    = e.target.files[0];
        
        if ( file.size > 1000000 ) { // Size > 1 MB ( Gore-Dolo :) )
            $( '#ErrorApplicationAlertsBody' ).html( 'Too Big Tablature File Size !!! ' );
            $( '#ErrorApplicationAlerts' ).removeClass( 'd-none' );
            $( '#ErrorApplicationAlerts' ).addClass( 'show' );
            
            return false;
        }
        $( '#tablature_form_tablature_label' ).html( file.name );
        
        return true
    };
    
    handleSubmit(): void
    {
    /*
        let formData = new FormData( e.target );
        formData.append( 'tablature_file', selectedFile );
        formData.append( 'published', tablature.published );
        
        addTablatureHandler( formData );
    */
    };
}
