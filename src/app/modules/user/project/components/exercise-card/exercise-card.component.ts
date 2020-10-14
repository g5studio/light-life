import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent implements OnInit {

  @Input() last: boolean;
  @Input() exercise: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  get url() {
    return `assets/images/examples/example_${this.exercise}.png`;
  }

  get name() {
    return this.exercise?.replace(/_/g, ' ')
  }

  public navigate() {
    this.router.navigate(['/user/project/exercise', this.exercise])
  }

}
