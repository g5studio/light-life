import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TdeeGuard implements CanActivate {

  constructor(
    private $user: UserService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.$user.user$.pipe(
      map(user => {
        if (user.isTDEEInfoCompleted) {
          return true
        } else {
          this.router.navigate(['/user/home']);
          return false;
        }
      })
    )
  }

}
