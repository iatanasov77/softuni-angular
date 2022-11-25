import { Component, Input } from '@angular/core';
import { Router  } from '@angular/router';

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
    
    constructor( private router: Router )
    {
        //console.log( router.url );
        this.currentRoute   = router.url
    }
}
