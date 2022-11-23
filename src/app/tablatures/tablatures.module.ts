import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestangularModule } from 'ngx-restangular';
import { RouterModule } from '@angular/router';

import { LatestTablaturesComponent } from './latest-tablatures/latest-tablatures.component';
import { MyTablaturesComponent } from './my-tablatures/my-tablatures.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TablatureItemComponent } from './tablature-item/tablature-item.component';
import { TablatureCreateComponent } from './tablature-create/tablature-create.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LatestTablaturesComponent,
        MyTablaturesComponent,
        FavoritesComponent,
        TablatureItemComponent,
        TablatureCreateComponent
    ],
    imports: [
        CommonModule,
        RestangularModule,
        RouterModule,
        
        SharedModule,
    ],
    exports: [
        LatestTablaturesComponent,
        MyTablaturesComponent,
        FavoritesComponent,
        TablatureCreateComponent
    ]
})
export class TablaturesModule { }
