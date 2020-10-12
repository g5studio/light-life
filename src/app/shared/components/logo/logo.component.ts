import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(
    private $auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirect() {
    this.router.navigate([this.$auth.isLogin ? 'user/home' : 'landing']);
  }

}
