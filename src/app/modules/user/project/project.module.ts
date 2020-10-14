import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project/project.component';
import { SharedModule } from '@shared/shared.module';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ExerciseCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
