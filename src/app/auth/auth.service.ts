import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { FirebaseService } from '@services/firebase.service';
import { OverlayService } from '@services/overlay.service';
import { UserService } from '@services/user.service';
import { EAuthError } from '@utilities/enums/auth.enum';
import { UserIdleService } from 'angular-user-idle';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $fbAuth: AngularFireAuth,
    private $fb: FirebaseService,
    private $overlay: OverlayService,
    private router: Router,
    private $idle: UserIdleService,
    private $user: UserService
  ) {
    this.$fbAuth.authState.subscribe(
      user => {
        if (user) {
          this.loginCallback(user);
        }
        else {
          this.logout();
        }
      }
    );
  }

  get isLogin() {
    return !!sessionStorage.getItem('uid');
  }

  public signUp({ email, password }): Promise<void> {
    this.$overlay.loading();
    return this.$fbAuth.auth.createUserWithEmailAndPassword(email, password).then(
      res => {
        this.$overlay.finishLoading();
      }
    ).catch(
      error => {
        this.$overlay.finishLoading();
        this.$overlay.togglePopup(this.getErrorMsg(error.code));
      }
    );
  }

  public login({ email, password }): Promise<void> {
    this.$overlay.loading();
    return this.$fbAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.$overlay.finishLoading();
      }
    ).catch(
      error => {
        this.$overlay.finishLoading();
        this.$overlay.togglePopup(this.getErrorMsg(error.code));
      }
    );
  }

  public logout() {
    sessionStorage.removeItem('uid');
    this.$fbAuth.auth.signOut();
    this.router.navigate(['landing']);
  }

  private loginCallback(user: firebase.User) {
    sessionStorage.setItem('uid', user.uid);
    this.$idle.startWatching()
    this.$idle.onTimeout().subscribe(_ => {
      this.logout();
      this.$idle.stopWatching();
    });
    this.initalUser(user);
  }

  private getErrorMsg(code: string) {
    return code.includes('user-not-found') ? EAuthError.UserNotFound :
      code.includes('wrong-password') ? EAuthError.PasswordIncorrect :
        code.includes('email-already-in-use') ? EAuthError.UserHasExisted :
          EAuthError.UnknowError;
  }

  private initalUser(user: firebase.User) {
    this.$overlay.loading();
    this.$fb.document('user', user.uid).get().subscribe(
      res => {
        if (res.data()) {
          const USER = new User({
            email: res.data().email,
            emailVerified: res.data().emailVerified,
            displayName: res.data().displayName,
            uid: res.data().uid,
          }, res.data().profile);
          this.$user.inital(USER);
          this.$overlay.finishLoading();
        } else {
          const USER_INFO = {
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            uid: user.uid
          };
          this.$fb.document('user', user.uid).set(USER_INFO).then(
            _ => {
              this.$overlay.finishLoading();
              this.$user.inital(new User(USER_INFO))
            }
          );
        }
        this.router.navigate([sessionStorage.getItem('redirect') || 'user/home']);
      }
    )
  }

}
