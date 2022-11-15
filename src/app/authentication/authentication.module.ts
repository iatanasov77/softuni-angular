import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
    declarations: [
        UserLoginComponent,
        UserRegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UserLoginComponent,
        UserRegisterComponent
    ]
})
export class AuthenticationModule { }