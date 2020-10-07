import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: '',
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'project' , loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
    { path: 'tdee' , loadChildren: () => import('./tdee/tdee.module').then(m => m.TdeeModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
