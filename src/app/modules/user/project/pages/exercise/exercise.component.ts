import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';
import { TrainMenu } from '@utilities/abstract/trainMenu.abstract';
import { EW } from '@utilities/enums/training.enum';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent extends TrainMenu implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    public router: Router,
    public $user: UserService
  ) {
    super();
  }

  get exercise() {
    return this.activeRouter.snapshot.paramMap.get('name');
  }

  get name() {
    return this.exercise.replace(/_/g, ' ');
  }

  get url() {
    return `assets/images/examples/example_${this.exercise}.png`;
  }

  get isCardio() {
    return this.cardios.findIndex(cardio => cardio === this.exercise) > -1
  }

  get isEw() {
    return this.ews.findIndex(ew => ew === this.exercise) > -1
  }

  ngOnInit(): void {
  }

  public getSuggestedWeight(user: User) {
    switch (this.exercise) {
      case EW.ChestPress: return user.profile.weight * 0.25;
      case EW.LegPress: return user.profile.weight * 0.5;
      case EW.ShoulderPressMachine: return user.profile.weight * 0.2;
    }
  }

}
