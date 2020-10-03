import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from '@services/overlay.service';
import { ProjectService } from '@services/project.service';
import { UserService } from '@services/user.service';
import { Gender, TrainExperience, TrainLevel } from '@utilities/enums/user.enum';

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
  }

  public setField(field: string, value?: any) {
    const FIELD = this.form.get(field);
    FIELD.markAsTouched();
    if (field === 'vegetarian') {
      FIELD.setValue(value === 'Yes');
    } else {
      FIELD.setValue(value || '');
    }
  }

  public submit() {
    this.$user.setUserProfile(this.form.getRawValue());
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
