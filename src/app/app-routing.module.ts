import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Guards
import { AuthActivate } from "./guards/auth.activate";

// Tablatures Components
import { PlayerComponent } from './tablature-player/player.component';
import { LatestTablaturesComponent } from './tablatures/latest-tablatures/latest-tablatures.component';

// Authentication Components
import { UserRegisterComponent } from './authentication/user-register/user-register.component';
import { UserLogoutComponent } from './authentication/user-logout/user-logout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/latest-tablatures'
    },
    {
        path: 'latest-tablatures',
        component: LatestTablaturesComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Latest Tablatures',
            loginRequired: false
        }
    },
    
    {
        path: 'tablatures/:id/play',
        component: PlayerComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Tablature Player',
            //loginRequired: false
        }
    },
    
    // Authentication Module
    {
        path: 'register',
        component: UserRegisterComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'User Registration',
            loginRequired: false
        }
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
