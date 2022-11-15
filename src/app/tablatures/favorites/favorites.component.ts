import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ITablature } from '../../interfaces/tablature';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

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
        })
    }
}
