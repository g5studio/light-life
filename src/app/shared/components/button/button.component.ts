import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onclick: EventEmitter<void> = new EventEmitter();
  @Input() disabled = false;
  @Input() dark = false;
  constructor() { }

  ngOnInit(): void {
  }

}
