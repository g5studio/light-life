import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { }

  private isloading: Subject<boolean> = new Subject();
  public isloading$ = this.isloading.asObservable().pipe(
    startWith(false)
  );

  private popupMsg: Subject<string> = new Subject();
  public popupMsg$ = this.popupMsg.asObservable().pipe(
    startWith('')
  );

  public loading() {
    this.isloading.next(true);
  }

  public finishLoading() {
    this.isloading.next(false);
  }

  public hidePopup() {
    this.popupMsg.next('');
  }

  public togglePopup(msg: string) {
    this.popupMsg.next(msg);
  }

}
