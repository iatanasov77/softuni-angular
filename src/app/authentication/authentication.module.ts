import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
    declarations: [
        UserRegisterComponent,
        UserLoginComponent,
        UserLogoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UserRegisterComponent,
        UserLoginComponent,
        UserLogoutComponent
    ]
})
export class AuthenticationModule { }
