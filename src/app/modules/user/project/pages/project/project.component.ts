import { Component, OnInit } from '@angular/core';
import { TrainService } from '@services/train.service';
import { UserService } from '@services/user.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestory';
import { ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $project: TrainService,
    public $user: UserService
  ) {
    super();
  }

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
      console.log(current)
      setTimeout(
        _ => this.randomRhythm(current),
        60000
      );
    }),
    takeUntil(this.onDestroy$)
  );

  ngOnInit(): void {
    this.randomHeartRhythm$.subscribe();
  }

  private randomRhythm(current) {
    const NEW = Math.floor(Math.random() * (120 - 90 + 1)) + 90;
    this.isUp = NEW >= current;
    this.heartRhythm.next(NEW);
    return NEW;
  }

}
