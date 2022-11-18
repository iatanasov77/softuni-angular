import { Component, Input } from '@angular/core';
import { ITablature } from '../../interfaces/tablature';
import { IUser } from '../../interfaces/user';

@Component({
    selector: 'tr[app-tablature-item]',
    templateUrl: './tablature-item.component.html',
    styleUrls: ['./tablature-item.component.scss']
})
export class TablatureItemComponent {

    @Input() tablature: ITablature;
    @Input() user: IUser;
    
    constructor() {
        this.tablature  = {
            id: 0,
            artist: "",
            song: "",
            enabled: false,
            
            //userId: IUser;
            owner: "",
            createdBy: 0,
            updatedBy: 0,
            createdAt: "",
            updatedAt: "",
            
            __v: 1
        };
        
        this.user  = {
            tablatures: [],
  
            id: 0,
            email: "",
            
            username: "",
            password: "",
            
            __v: 1
        };
    }

}
