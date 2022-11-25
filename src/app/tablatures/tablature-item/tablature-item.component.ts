import { Component, Input, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';
import { IAuth } from '../../interfaces/auth';

@Component({
    selector: 'tr[app-tablature-item]',
    templateUrl: './tablature-item.component.html',
    styleUrls: ['./tablature-item.component.scss']
})
export class TablatureItemComponent implements OnInit
{

    @Input() tablature?: ITablature;
    @Input() auth?: IAuth | null;
    
    currentRoute: string;
    errorFetcingData = false;
    
    constructor( private apiService: ApiService, private router: Router )
    {
        //console.log( router.url );
        this.currentRoute   = router.url
    }
    
    ngOnInit(): void
    {
        //alert( this?.tablature?.createdBy );
        //alert( this?.auth?.username );
    }
    
    onClickDelete( e: any )
    {
        if ( this.tablature ) {
            this.apiService.deleteTablature( this.tablature.id ).subscribe({
                next: ( response: any ) => {
                    //console.log( response );
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
        }
    }
}
