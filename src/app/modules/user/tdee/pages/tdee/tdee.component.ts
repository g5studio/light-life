import { Component, OnInit } from '@angular/core';
import { TrainService } from '@services/train.service';

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.scss']
})
export class TdeeComponent implements OnInit {

  constructor(
    public $project: TrainService
  ) { }

  ngOnInit(): void {
  }

}
