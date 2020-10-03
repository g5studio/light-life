import { Injectable } from '@angular/core';
import { IUserProfile } from '@shared/interfaces/user.interface';
import { TrainLevel } from '@utilities/enums/user.enum';
import { filter, map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private $user: UserService
  ) {

  }

  public trainingProject$ = this.$user.user$.pipe(
    tap(_ => console.log(_)),
    filter(user => !!user.profile.age),
    map(user => this.settingProject(user.profile))
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
}
