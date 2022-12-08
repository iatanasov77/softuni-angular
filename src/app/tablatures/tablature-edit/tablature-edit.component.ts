import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, merge } from 'rxjs';
import { loadTablature, loadTablatureFailure, loadTablatureSuccess } from '../../+store/actions';
import { getRouteParams, getTablature } from '../../+store/selectors';
import { ApiService } from '../../services/api.service';

import { ITablature } from '../../interfaces/tablature';

declare var $: any;
declare var file: File;

@Component({
    selector: 'app-tablature-edit',
    templateUrl: './tablature-edit.component.html',
    styleUrls: []
})
export class TablatureEditComponent implements OnInit
{
    routeParams$ = this.store.select( getRouteParams );
    tablature$ = this.store.select( getTablature );
    
    tablature: ITablature | null = null;
    errorFetcingData = false;
    
    isFetchingTablature$ = merge(
        this.actions$.pipe(
            ofType( loadTablature ),
            map( () => true )
        ),
        this.actions$.pipe(
            ofType( loadTablatureSuccess ),
            map( () => false )
        ),
        this.actions$.pipe(
            ofType( loadTablatureFailure ),
            map( () => false )
        )
    );
    
    tablatureFileOriginalName: any;
    tablatureForm    = this.fb.group({
        published: [false, []],
        
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
        
        tablature: ['', [Validators.required]],
        tablatureSource: [null, [Validators.required]],
    });
    
    constructor(
        private store: Store,
        private actions$: Actions,
        private router: Router,
        private fb: FormBuilder,
        private apiService: ApiService
    ) { }

    ngOnInit(): void
    {
        this.routeParams$.subscribe( params => {
            this.store.dispatch( loadTablature( { tabId: +params['id'] } ) ); // (+) converts string 'id' to a number
            
            this.store.subscribe( ( state: any ) => {
                this.tablature = state.main.tablature;
                
                if ( this.tablature ) {
                    this.tablatureFileOriginalName  = this.tablature.tablatureFile?.originalName;
                    this.tablatureForm.setValue({
                        published: this.tablature.enabled,
                        artist: this.tablature.artist,
                        song: this.tablature.song,
                        
                        tablature: '',
                        tablatureSource: null
                    });
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
        let tabFile     = this.tablatureForm.get( 'tablatureSource' )?.value;
        
        formData.append( '_method', 'PUT' );
        formData.append( 'published', String( published ) );
        formData.append( 'artist', String( this.tablatureForm.get( 'artist' )?.value ) );
        formData.append( 'song', String( this.tablatureForm.get( 'song' )?.value ) );
        formData.append( 'tablature', tabFile as any );
        
        let tabId   = Number( this.tablature?.id );
        if ( Number.isInteger( tabId ) ) {
            this.apiService.updateTablature( tabId, formData ).subscribe({
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
