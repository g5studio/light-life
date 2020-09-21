import { LandingGuard } from './landing.guard';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [LandingGuard],
    children: [
      { path: '', component: LandingComponent },
      { path: 'sign-up', component: SingUpComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
