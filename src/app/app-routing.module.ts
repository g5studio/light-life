import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
