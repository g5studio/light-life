import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from '@services/overlay.service';
import { ProjectService } from '@services/project.service';
import { UserService } from '@services/user.service';
import { Gender, TrainExperience, TrainLevel } from '@utilities/enums/user.enum';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-project-question-modal',
  templateUrl: './project-question-modal.component.html',
  styleUrls: ['./project-question-modal.component.scss']
})
export class ProjectQuestionModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public $overlay: OverlayService,
    private $project: ProjectService,
    private $user: UserService
  ) { }

  public form: FormGroup;
  public genders = [Gender.Male, Gender.Female];
  public experiences = [TrainExperience.Junior, TrainExperience.Senior];
  public levels = [TrainLevel.Level1, TrainLevel.Level2]


  ngOnInit(): void {
    this.inital();
    this.$user.user$.pipe(
      take(1),
      filter(user => !!user.profile)
    ).subscribe(
      user => {
        this.form.get('age').setValue(user.profile.age);
        this.form.get('weight').setValue(user.profile.weight);
        this.form.get('gender').setValue(user.profile.gender);
        this.form.get('experience').setValue(user.profile.experience);
        this.form.get('level').setValue(user.profile.level);
        if (user.profile.vegetarian !== undefined) {
          this.form.get('vegetarian').setValue(user.profile.vegetarian);
        }
      }
    );
  }

  public setField(field: string, value?: any) {
    const FIELD = this.form.get(field);
    FIELD.markAsTouched();
    if (field === 'vegetarian') {
      FIELD.setValue(value ? value === 'Yes' : '');

    } else {
      FIELD.setValue(value || '');
    }
  }

  public submit() {
    this.$user.setUserProfile(this.form.getRawValue(), 'user/project');
  }

  private inital() {
    this.form = this.formBuilder.group(
      {
        age: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        level: ['', [Validators.required]],
        vegetarian: ['', [Validators.required]]
      }
    )
  }

}
