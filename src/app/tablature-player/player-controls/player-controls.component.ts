import { Component, Input, OnInit } from '@angular/core';
import { AlphaTabApi } from '@coderline/alphatab';

import { IUser } from '../../interfaces/user';

@Component({
    selector: 'player-controls',
    templateUrl: './player-controls.component.html',
    styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit
{
    @Input() tabId: number = 0;
    @Input() user?: IUser;
    @Input() player?: AlphaTabApi;
    
    constructor()
    {
        
    }
    
    ngOnInit(): void
    {
        
    }  
}
