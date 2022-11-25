import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

@Component({
    selector: 'app-my-tablatures',
    templateUrl: './my-tablatures.component.html',
    styleUrls: ['./my-tablatures.component.scss']
})
export class MyTablaturesComponent implements OnInit {

    tablatures: ITablature[] | null = null;
    errorFetcingData = false;
    
    constructor( private apiService: ApiService ) { }
    
    ngOnInit(): void {
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
