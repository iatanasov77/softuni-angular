import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestangularModule } from 'ngx-restangular';

import { LatestTablaturesComponent } from './latest-tablatures/latest-tablatures.component';
import { TablatureItemComponent } from './tablature-item/tablature-item.component';
import { TablatureCreateComponent } from './tablature-create/tablature-create.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LatestTablaturesComponent,
        TablatureItemComponent,
        TablatureCreateComponent
    ],
    imports: [
        CommonModule,
        RestangularModule,  // Importing RestangularModule
    
        SharedModule,
    ],
    exports: [
        LatestTablaturesComponent,
        TablatureCreateComponent
    ]
})
export class TablaturesModule { }