import { Component, Input, OnInit } from '@angular/core';
import { AlphaTabApi } from '@coderline/alphatab';

import { LocalService } from '../../services/local.service';
import { IAuth } from '../../interfaces/auth';

@Component({
    selector: 'player-controls',
    templateUrl: './player-controls.component.html',
    styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit
{
    @Input() tabId: number = 0;
    @Input() player?: AlphaTabApi;
    
    auth: IAuth | null;
    
    constructor( private localStore: LocalService )
    {
        this.auth   = null;
    }
    
    ngOnInit(): void
    {
        this.auth   = this.localStore.getAuth();
    }  
}
