import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectGuard } from './project.guard';


const routes: Routes = [{
  path: '',
  canActivate: [ProjectGuard],
  children: [
    {path: '', component: ProjectComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
