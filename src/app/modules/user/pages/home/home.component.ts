import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services/overlay.service';
import { EModalType } from '@utilities/enums/overlay.enum';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public $auth: AuthService,
    private $overlay: OverlayService
  ) { }

  ngOnInit(): void {
  }

  public toggleProjectQuestionModal() {
    this.$overlay.toggleModal(EModalType.ProjectQuestion);
  }

  public toggleTDEEModal() {
    this.$overlay.toggleModal(EModalType.Tdee);
  }

}
