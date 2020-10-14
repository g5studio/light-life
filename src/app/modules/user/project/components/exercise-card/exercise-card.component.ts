import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.url)
  }

}
