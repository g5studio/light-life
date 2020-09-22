import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    MessagePopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    LogoComponent,
    MessagePopupComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
