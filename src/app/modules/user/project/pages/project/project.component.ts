import { Component, OnInit } from '@angular/core';
import { TrainService } from '@services/train.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    private $project: TrainService
  ) { }

  ngOnInit(): void {
    this.$project.trainingProject$.subscribe(
      _ => {
        console.log(_)
      }
    )
  }

}
