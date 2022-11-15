import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LatestTablaturesComponent } from './tablatures/latest-tablatures/latest-tablatures.component';
import { UserRegisterComponent } from './authentication/user-register/user-register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/latest-tablatures'
    },
    {
        path: 'latest-tablatures',
        component: LatestTablaturesComponent
    },
    {
        path: 'register',
        component: UserRegisterComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
