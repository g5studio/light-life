import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private $auth: AuthService,
    public $overlay: OverlayService
  ) { }

  public form: FormGroup;

  ngOnInit(): void {
    this.inital();
  }

  public signUp() {
    this.$auth.signUp(this.form.getRawValue());
  }

  public getErrorMessage(field: string, error: string) {
    if (field === 'confirm' && this.form.hasError('notEqual')) {
      return this.form.getError('notEqual').message;
    } else if (this.form.get(field).hasError(error)) {
      return this.form.get(field).getError(error).message;
    }
  }

  private inital() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, this.validateEmail]],
        password: ['', [Validators.required, this.validatePassword]],
        confirm: ['', [Validators.required, this.validatePassword]],
      },
      {
        validator: this.validateConfirmPassword
      });
  }

  private validateEmail(control: AbstractControl): ValidationErrors {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(control.value)
      ? null
      : { invalid: { message: 'Dose not match email rule.' } };
  }

  private validatePassword(control: AbstractControl): ValidationErrors {
    return control.value.length > 5
      ? null
      : { invalid: { message: 'Password must contain at least 6 characters.' } };
  }
  private validateConfirmPassword(group: FormGroup): ValidationErrors {
    const ref = group.get('password').value;
    const compare = group.get('confirm').value;
    return ref === compare ? null : { notEqual: { message: 'Dose not equal new password' } };
  }
}
