import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    MessagePopupComponent,
    DropdownComponent
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
    FormsModule,
    DropdownComponent
  ]
})
export class SharedModule { }
