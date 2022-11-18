import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

@Component({
    selector: 'app-latest-tablatures',
    templateUrl: './latest-tablatures.component.html',
    styleUrls: ['./latest-tablatures.component.scss']
})
export class LatestTablaturesComponent implements OnInit {

    tablatures: ITablature[] | null = null;
    errorFetcingData = false;
    
    constructor( private apiService: ApiService ) { }
    
    ngOnInit(): void {
        this.apiService.loadLatestTablatures( 10 ).subscribe({
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
