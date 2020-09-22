import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { OverlayService } from '@services/overlay.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $fbAuth: AngularFireAuth,
    private $overlay: OverlayService,
    private router: Router
  ) {
    if (this.isLogin) {
      this.router.navigate([sessionStorage.getItem('redirect') || 'user/home']);
    }
    this.$fbAuth.authState.subscribe(
      user => {
        console.log(user)
        if (user) {
          sessionStorage.setItem('uid', user.uid);
          this.router.navigate([sessionStorage.getItem('redirect') || 'user/home']);
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
        console.log(res);
      }
    ).catch(
      error => {
        this.$overlay.finishLoading();
        console.log(error.code);
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
        console.log(error.code);
      }
    );
  }

  public logout() {
    sessionStorage.removeItem('uid');
    this.$fbAuth.auth.signOut();
    this.router.navigate(['landing']);
  }

  private getErrorMsg(code: string) {
    return code.includes('user-not-found') ? 'User not found, please sign up first.' : 'Unknow error';
  }

}
