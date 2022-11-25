import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestangularModule } from 'ngx-restangular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LatestTablaturesComponent } from './latest-tablatures/latest-tablatures.component';
import { MyTablaturesComponent } from './my-tablatures/my-tablatures.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TablatureItemComponent } from './tablature-item/tablature-item.component';
import { TablatureCreateComponent } from './tablature-create/tablature-create.component';
import { TablatureEditComponent } from './tablature-edit/tablature-edit.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LatestTablaturesComponent,
        MyTablaturesComponent,
        FavoritesComponent,
        TablatureItemComponent,
        TablatureCreateComponent,
        TablatureEditComponent
    ],
    imports: [
        CommonModule,
        RestangularModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
        SharedModule,
    ],
    exports: [
        LatestTablaturesComponent,
        MyTablaturesComponent,
        FavoritesComponent,
        TablatureCreateComponent,
        TablatureEditComponent
    ]
})
export class TablaturesModule { }
