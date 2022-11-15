import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { ModalTacComponent } from './modal-tac/modal-tac.component';

import { AuthenticationModule } from '../authentication/authentication.module';
import { TablaturesModule } from '../tablatures/tablatures.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        AlertsComponent,
        ButtonIconsComponent,
        ModalTacComponent
    ],
    imports: [
        CommonModule,
        
        AppRoutingModule,
        AuthenticationModule,
        TablaturesModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        AlertsComponent,
        ButtonIconsComponent,
        ModalTacComponent
    ]
})
export class CoreModule { }
