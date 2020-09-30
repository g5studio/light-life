import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { OverlayService } from '@services/overlay.service';
import { EAuthError } from '@utilities/enums/auth.enum';
import { UserIdleService } from 'angular-user-idle';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $fbAuth: AngularFireAuth,
    private $overlay: OverlayService,
    private router: Router,
    private $idle: UserIdleService,
  ) {
    this.$fbAuth.authState.subscribe(
      user => {
        if (user) {
          sessionStorage.setItem('uid', user.uid);
          this.loginCallback();
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

  private loginCallback() {
    this.$idle.startWatching()
    this.$idle.onTimerStart().subscribe(_ => console.log('user inactivity!, will logout in 5 min'));
    this.$idle.onTimeout().subscribe(_ => this.logout());
    this.router.navigate([sessionStorage.getItem('redirect') || 'user/home']);
  }

  private getErrorMsg(code: string) {
    return code.includes('user-not-found') ? EAuthError.UserNotFound :
      code.includes('wrong-password') ? EAuthError.PasswordIncorrect :
        code.includes('email-already-in-use') ? EAuthError.UserHasExisted :
          EAuthError.UnknowError;
  }

}
