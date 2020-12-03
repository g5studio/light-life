import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { ReplaySubject, Subject } from 'rxjs';
import { FirebaseService } from '@services/firebase.service';
import { take, tap } from 'rxjs/operators';
import { OverlayService } from './overlay.service';
import { Router } from '@angular/router';
import { IHeartRateRange, IUserProfile } from '@shared/interfaces/user.interface';
import { Gender } from '@utilities/enums/user.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $fb: FirebaseService,
    private $overlay: OverlayService,
    private router: Router
  ) { }

  private user: ReplaySubject<User> = new ReplaySubject(1);
  public user$ = this.user.asObservable().pipe(
    // tap(_ => console.log(_)),
  );

  public getRecommandHeartRate(gender: Gender, age: number): IHeartRateRange {
    const Max = gender === Gender.Male ? 205 - age : 220 - age;
    return {
      maxRate: Max * 0.85,
      minRate: Max * 0.6
    }
  }

  public inital(user: User) {
    this.user.next(user);
  }

  public setUserProfile(profile: IUserProfile, redirect?: string) {
    this.$overlay.loading();
    this.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.$fb.document('user', user.uid).set({ profile: profile }).then(
          _ => {
            this.$overlay.finishLoading();
            user.setProfile(profile);
            this.user.next(user);
            this.$overlay.closeModal();
            if (redirect) {
              this.router.navigate([redirect]);
            }
          }
        )
      }
    )

  }
}
