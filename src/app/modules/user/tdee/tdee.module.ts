import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdeeRoutingModule } from './tdee-routing.module';
import { TdeeComponent } from './pages/tdee/tdee.component';


@NgModule({
  declarations: [TdeeComponent],
  imports: [
    CommonModule,
    TdeeRoutingModule
  ]
})
export class TdeeModule { }
