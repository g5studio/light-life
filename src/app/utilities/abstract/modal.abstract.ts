import { ElementRef, EventEmitter, Injectable, Output } from '@angular/core';
import { pipe, ReplaySubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { UnsubOndestroy } from './unsub-ondestory';

@Injectable()
export abstract class AbstractModal extends UnsubOndestroy {

    constructor() {
        super();
    }

    private menu: any;
    private blur = this.detectBlurEvent.bind(this);
    public isOpen = false;

    private isClosed: Subject<boolean> = new Subject();
    public isClosed$ = this.isClosed.asObservable().pipe(
        startWith(false)
    )

    private detectBlurEvent(event: Event) {
        if(!this.menu.contains(event.target)) {
            this.collapse(event);
        }
    }

    public collapse(event: Event) {
        event.stopPropagation();
        removeEventListener('click', this.blur);
        this.isOpen = false;
        this.isClosed.next(true);
    }

    public expand(event: Event, target: any) {
        event.stopPropagation();
        this.menu = target;
        this.isOpen = true;
        addEventListener('click', this.blur);
    }
}