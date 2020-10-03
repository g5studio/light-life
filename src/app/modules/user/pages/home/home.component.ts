import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from '@services/overlay.service';
import { UserService } from '@services/user.service';
import { EModalType } from '@utilities/enums/overlay.enum';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public $auth: AuthService,
    private $user: UserService,
    private $overlay: OverlayService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleProjectQuestionModal() {
    this.$user.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        if (user.profile.age) {
          this.router.navigate(['/user/project']);
        } else {
          this.$overlay.toggleModal(EModalType.ProjectQuestion);
        }
      }
    );
  }

  public toggleTDEEModal() {
    this.$overlay.toggleModal(EModalType.Tdee);
  }

}
