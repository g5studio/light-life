import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    OverlayComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayComponent,
    LoadingComponent
  ]
})
export class OverlayModule { }
