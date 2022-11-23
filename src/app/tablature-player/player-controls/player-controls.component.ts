import { Component, Input, OnInit } from '@angular/core';
import { AlphaTabApi } from '@coderline/alphatab';

import { LocalService } from '../../services/local.service';

@Component({
    selector: 'player-controls',
    templateUrl: './player-controls.component.html',
    styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit
{
    @Input() tabId: number = 0;
    @Input() player?: AlphaTabApi;
    
    isLoggedIn: boolean;
    
    constructor( private localStore: LocalService )
    {
        //this.isLoggedIn = this.localStore.isLoggedIn();
        this.isLoggedIn = false
    }
    
    ngOnInit(): void
    {
        
    }  
}
