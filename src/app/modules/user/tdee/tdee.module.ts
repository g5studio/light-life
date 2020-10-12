import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdeeRoutingModule } from './tdee-routing.module';
import { TdeeComponent } from './pages/tdee/tdee.component';
import { TdeeCardComponent } from './components/tdee-card/tdee-card.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [TdeeComponent, TdeeCardComponent],
  imports: [
    CommonModule,
    TdeeRoutingModule,
    SharedModule
  ]
})
export class TdeeModule { }
