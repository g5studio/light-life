import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SingUpComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
