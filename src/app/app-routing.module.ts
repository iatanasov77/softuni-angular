import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        component: LatestTablaturesComponent
    },
    
    {
        path: 'tablatures/:id/play',
        component: PlayerComponent
    },
    
    // Authentication Module
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
