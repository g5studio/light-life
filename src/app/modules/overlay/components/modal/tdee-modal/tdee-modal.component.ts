import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { UserService } from '@services/user.service';
import { ActivityLevel, Gender } from '@utilities/enums/user.enum';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tdee-modal',
  templateUrl: './tdee-modal.component.html',
  styleUrls: ['./tdee-modal.component.scss']
})
export class TdeeModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public $overlay: OverlayService,
    private $user: UserService
  ) { }

  ngOnInit(): void {
    this.inital();
    this.$user.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.form.get('age').setValue(user.profile.age);
        this.form.get('weight').setValue(user.profile.weight);
        this.form.get('gender').setValue(user.profile.gender);
        this.form.get('activityLevel').setValue(user.profile.activityLevel);
      }
    );
  }

  public form: FormGroup;
  public genders = [Gender.Male, Gender.Female];
  public activityLevel = [ActivityLevel.Secentary, ActivityLevel.Lightly, ActivityLevel.Moderately, ActivityLevel.Very, ActivityLevel.Extremely];

  public submit() {
    this.$user.setUserProfile(this.form.getRawValue(), 'user/tdee');
  }

  public setField(field: string, value?: any) {
    const FIELD = this.form.get(field);
    FIELD.markAsTouched();
    FIELD.setValue(value || '');
  }

  private inital() {
    this.form = this.formBuilder.group(
      {
        age: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        activityLevel: ['', [Validators.required]]
      }
    )
  }

}
