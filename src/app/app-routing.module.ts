import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Guards
import { AuthActivate } from "./guards/auth.activate";

// Tablatures Components
import { PlayerComponent } from './tablature-player/player.component';
import { LatestTablaturesComponent } from './tablatures/latest-tablatures/latest-tablatures.component';
import { MyTablaturesComponent } from './tablatures/my-tablatures/my-tablatures.component';
import { FavoritesComponent } from './tablatures/favorites/favorites.component';

// Authentication Components
import { UserRegisterComponent } from './authentication/user-register/user-register.component';
import { UserLogoutComponent } from './authentication/user-logout/user-logout.component';

// Error Pages
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/latest-tablatures'
    },
    {
        path: 'not-found',
        component: PageNotFoundComponent
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
        path: 'my-tablatures',
        component: MyTablaturesComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'My Tablatures',
            loginRequired: true
        }
    },
    {
        path: 'my-favorites',
        component: FavoritesComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'My Favorites',
            loginRequired: true
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
    
    // 404 Page Not Found
    {
        path: '**',
        redirectTo: '/not-found'
    }
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
