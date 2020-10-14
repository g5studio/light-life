import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectGuard } from './project.guard';


const routes: Routes = [{
  path: '',
  canActivate: [ProjectGuard],
  children: [
    {path: '', component: ProjectComponent},
    {path: 'exercise/:name', component: ExerciseComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
