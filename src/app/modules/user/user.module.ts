import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './pages/project/project.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
