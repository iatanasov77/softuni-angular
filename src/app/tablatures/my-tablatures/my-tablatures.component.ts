import { Component, OnInit } from '@angular/core';

import { LocalService } from '../../services/local.service';
import { ApiService } from '../../services/api.service';
import { IAuth } from '../../interfaces/auth';
import { ITablature } from '../../interfaces/tablature';

@Component({
    selector: 'app-my-tablatures',
    templateUrl: './my-tablatures.component.html',
    styleUrls: ['./my-tablatures.component.scss']
})
export class MyTablaturesComponent implements OnInit
{

    auth?: IAuth | null = null;
    tablatures: ITablature[] | null = null;
    errorFetcingData = false;
    
    constructor( private localStore: LocalService, private apiService: ApiService ) { }
    
    ngOnInit(): void
    {
        this.auth   = this.localStore.getAuth();
        
        this.apiService.loadMyTablatures( 10 ).subscribe({
            next: ( response: any ) => {
                this.tablatures = response;
            },
            error: ( err: any ) => {
                this.errorFetcingData = true;
                console.error( err );
            }
        });
    }
}
