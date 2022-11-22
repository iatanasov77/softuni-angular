import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { ModalTacComponent } from './modal-tac/modal-tac.component';
import { ModalInformationComponent } from './modal-information/modal-information.component';

import { AuthenticationModule } from '../authentication/authentication.module';
import { TablaturesModule } from '../tablatures/tablatures.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        PageNotFoundComponent,
        AlertsComponent,
        ButtonIconsComponent,
        ModalTacComponent,
        ModalInformationComponent
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
        PageNotFoundComponent,
        AlertsComponent,
        ButtonIconsComponent,
        ModalTacComponent,
        ModalInformationComponent
    ]
})
export class CoreModule { }
