import { Injectable } from '@angular/core';
import { IUserProfile } from '@shared/interfaces/user.interface';
import { ActivityLevel, Gender, TrainLevel } from '@utilities/enums/user.enum';
import { filter, map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(
    private $user: UserService
  ) {

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
    if (profile.age > 60) {
      switch (profile.level) {
        case TrainLevel.Level1: return '6個動作選1個';
        case TrainLevel.Level2: return '6個動作選2個';
      }
    } else {
      switch (profile.level) {
        case TrainLevel.Level1: return 'cardio 45 mins';
        case TrainLevel.Level2: return 'cardio 30 mins or EW';
      }
    }
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
