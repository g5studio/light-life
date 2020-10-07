import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdeeComponent } from './pages/tdee/tdee.component';
import { TdeeGuard } from './tdee.guard';


const routes: Routes = [{
  path: '',
  canActivate: [TdeeGuard],
  children: [
    { path: '', component: TdeeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdeeRoutingModule { }
