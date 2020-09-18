import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
