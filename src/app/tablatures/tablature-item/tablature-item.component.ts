import { Component, Input } from '@angular/core';
import { Router  } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';
import { IUser } from '../../interfaces/user';

@Component({
    selector: 'tr[app-tablature-item]',
    templateUrl: './tablature-item.component.html',
    styleUrls: ['./tablature-item.component.scss']
})
export class TablatureItemComponent {

    @Input() tablature?: ITablature;
    @Input() user?: IUser;
    
    currentRoute: string;
    errorFetcingData = false;
    
    constructor( private apiService: ApiService, private router: Router )
    {
        //console.log( router.url );
        this.currentRoute   = router.url
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
