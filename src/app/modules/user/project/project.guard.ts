import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ProjectService } from '@services/project.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanActivate {
  constructor(
    private $user: UserService,
    private router: Router
  ) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.$user.user$.pipe(
      map(user => {
        if(user.profile.age) {
          return true
        } else {
          this.router.navigate(['/user/home']);
          return false;
        }
      })
    )
  }

}
