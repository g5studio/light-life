import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OverlayService } from '@services/overlay.service';
import { EModalType } from '@utilities/enums/overlay.enum';
import { env } from 'process';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @ViewChild('tModal') modal: ElementRef;

  constructor(
    public $overlay: OverlayService
  ) { }

  get modalType(): typeof EModalType {
    return EModalType;
  }

  ngOnInit(): void {
  }

  public closeModal(event: Event) {
    if(!this.modal.nativeElement.contains(event.target)) {
      this.$overlay.closeModal();
    }
  }

}
