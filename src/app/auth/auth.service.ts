import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $fbAuth: AngularFireAuth
  ) {
    this.$fbAuth.authState.subscribe(
      user => {
        console.log(user)
        if (user) {
          sessionStorage.setItem('uid', user.uid);
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

  public login({ email, password }): Promise<void> {
    console.log(email, password)
    return this.$fbAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        console.log(res);
      }
    ).catch(
      error => {
        console.log(error.code);
      }
    );
  }
  public logout() {
    this.$fbAuth.auth.signOut();
  }
}
