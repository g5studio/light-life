import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private $auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuth(state.url);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuth(state.url);
  }

  private isAuth(url: string) {
    if (!url.includes('landing')) {
      sessionStorage.setItem('redirect', url.replace('/', ''));
    }
    if (!this.$auth.isLogin && !url.includes('landing')) {
      this.router.navigate(['landing']);
      return true;
    }

    return true;
  }

}
