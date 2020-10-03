import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { ReplaySubject, Subject } from 'rxjs';
import { FirebaseService } from '@services/firebase.service';
import { take, tap } from 'rxjs/operators';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $fb: FirebaseService,
    private $overlay: OverlayService
  ) { }

  private user: ReplaySubject<User> = new ReplaySubject(1);
  public user$ = this.user.asObservable().pipe(
    // tap(_ => console.log(_)),
  );

  public inital(user: User) {
    this.user.next(user);    
  }

  public setUser(data: any) {
    this.$overlay.loading();
    this.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.$fb.document('user', user.uid).set(data).then(
          _ => {
            this.$overlay.finishLoading();
            user.setProfile(data);
            this.user.next(user);
          }
        )
      }
    )

  }
}
