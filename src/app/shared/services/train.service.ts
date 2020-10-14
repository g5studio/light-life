import { Injectable } from '@angular/core';
import { IUserProfile } from '@shared/interfaces/user.interface';
import { TrainMenu } from '@utilities/abstract/trainMenu.abstract';
import { ChestExercise } from '@utilities/enums/training.enum';
import { ActivityLevel, Gender, TrainLevel } from '@utilities/enums/user.enum';
import { filter, map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TrainService extends TrainMenu {

  constructor(
    private $user: UserService
  ) {
    super();
  }

  public trainingProject$ = this.$user.user$.pipe(
    take(1),
    filter(user => user.isProjectInfoCompleted),
    map(user => this.settingProject(user.profile))
  )

  public tdee$ = this.$user.user$.pipe(
    take(1),
    filter(user => user.isTDEEInfoCompleted),
    map(user => this.calculateTDEE(user.profile))
  )

  private settingProject(profile: IUserProfile) {
    if (profile.age < 60) {
      switch (profile.level) {
        case TrainLevel.Level1: return this.getExsercise();
        case TrainLevel.Level2: return this.getTwoExsercises();
      }
    } else {
      switch (profile.level) {
        case TrainLevel.Level1: return this.cardios;
        case TrainLevel.Level2:
          let exercise = [];
          exercise =this.cardios;
          exercise.push(this.ews[this.getRandom(this.ews.length)]);
          return exercise;
      }
    }
  }

  private getTwoExsercises() {
    let exerciseOne = 0, exerciseTwo = 0;
    while (exerciseOne === exerciseTwo || exerciseOne === 0 || exerciseTwo === 0) {
      if (exerciseOne === 0) {
        exerciseOne = this.getRandom(this.youngExsercises.length)
      } else {
        exerciseTwo = this.getRandom(this.youngExsercises.length);
      }
    }
    return [this.getRandomExample(exerciseOne - 1), this.getRandomExample(exerciseTwo - 1)];
  }

  private getExsercise() {
    return [this.getRandomExample(this.getRandom(this.youngExsercises.length))];
  }

  private calculateTDEE(profile: IUserProfile) {
    let bmr = 0;
    switch (profile.gender) {
      case Gender.Female:
        bmr = 655 + 9.6 * profile.weight + 1.8 * profile.height - 4.7 * profile.age;
        break;
      case Gender.Male:
        bmr = 66 + 13.7 * profile.weight + 5 * profile.height - 6.8 * profile.age;
        break;
    }
    return this.getActivityFactor(profile.activityLevel) * bmr;
  }

  private getActivityFactor(level: ActivityLevel): number {
    switch (level) {
      case ActivityLevel.Secentary: return 1.2;
      case ActivityLevel.Lightly: return 1.375;
      case ActivityLevel.Moderately: return 1.55;
      case ActivityLevel.Very: return 1.725;
      case ActivityLevel.Extremely: return 1.9;
    }
  }


}
