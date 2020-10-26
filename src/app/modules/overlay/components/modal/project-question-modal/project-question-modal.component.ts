import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { UserService } from '@services/user.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestory';
import { Gender, TrainExperience, TrainLevel } from '@utilities/enums/user.enum';
import { ReplaySubject, Subject, timer } from 'rxjs';
import { filter, map, startWith, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project-question-modal',
  templateUrl: './project-question-modal.component.html',
  styleUrls: ['./project-question-modal.component.scss']
})
export class ProjectQuestionModalComponent extends UnsubOndestroy implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public $overlay: OverlayService,
    private $user: UserService
  ) {
    super();
  }

  public form: FormGroup;
  public genders = [Gender.Male, Gender.Female];
  public experiences = [TrainExperience.Junior, TrainExperience.Senior];
  public levels = [TrainLevel.Level1, TrainLevel.Level2]

  public isUp;

  private heartRhythm: Subject<number> = new Subject();
  public heartRhythm$ = this.heartRhythm.asObservable().pipe(
    startWith(100),
    map(current => {
      this.randomHeartRhythm.next(current);
      return current;
    })
  );

  private randomHeartRhythm = new ReplaySubject();
  private randomHeartRhythm$ = this.randomHeartRhythm.asObservable().pipe(
    map(current => {
      setTimeout(
        _ => this.randomRhythm(current),
        1500
      );
    }),
    takeUntil(this.onDestroy$)
  );

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
    this.randomHeartRhythm$.subscribe();
    this.form = this.formBuilder.group(
      {
        age: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        level: ['', [Validators.required]],
        vegetarian: ['', [Validators.required]]
      }
    );
  }

  private randomRhythm(current) {
    const NEW = Math.floor(Math.random() * (120 - 90 + 1)) + 90;
    this.isUp = NEW >= current;
    this.heartRhythm.next(NEW);
    return NEW;
  }

}
