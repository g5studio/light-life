import { Component, OnInit } from '@angular/core';
import { TrainService } from '@services/train.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    public $project: TrainService
  ) { }

  ngOnInit(): void {
  }

}
