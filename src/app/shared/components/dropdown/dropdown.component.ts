import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractModal } from '@utilities/abstract/modal.abstract';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractModal implements OnInit {

  @Input() default: any;
  @Input() options: any[] = [];
  @Input() alert: boolean = false;
  @Output() onclose: EventEmitter<any> = new EventEmitter();

  constructor() { 
    super();
  }

  private selected: any = '';

  ngOnInit(): void {
    this.isClosed$.pipe(
      filter(_ => _),
      takeUntil(this.onDestroy$)
    ).subscribe(
      _ => {
        this.onclose.next(this.selected);
      }
    )
  }

  public select(event: Event,value: any) {
    this.selected = value;
    this.collapse(event);
  }

}
