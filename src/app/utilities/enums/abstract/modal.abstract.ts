import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractModal {
    constructor() {

    }

    private menu: any;
    private blur = this.detectBlurEvent.bind(this);
    public isOpen = false;

    private detectBlurEvent(event: Event) {
        if(!this.menu.contains(event.target)) {
            this.collapse(event);
        }
    }

    public collapse(event: Event) {
        event.stopPropagation();
        removeEventListener('click', this.blur);
        this.isOpen = false;
    }

    public expand(event: Event, target: ElementRef) {
        event.stopPropagation();
        this.menu = target.nativeElement;
        this.isOpen = true;
        addEventListener('click', this.blur);
    }
}