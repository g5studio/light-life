import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project/project.component';
import { SharedModule } from '@shared/shared.module';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ExerciseCardComponent,
    CarouselComponent,
    ExerciseComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
