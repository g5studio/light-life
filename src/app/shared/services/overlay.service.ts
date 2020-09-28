import { Injectable } from '@angular/core';
import {ReplaySubject, Subject } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import {EModalType} from '@utilities/enums/overlay.enum';
 
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

  private modal: Subject<EModalType> = new Subject();
  public modal$ = this.modal.asObservable().pipe(
    startWith(EModalType.Close),
    tap(_ => console.log(_))
  )

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

  public toggleModal(type: EModalType) {
    this.modal.next(type)
  }

  public closeModal() {
    this.modal.next(EModalType.Close)
  }

}
