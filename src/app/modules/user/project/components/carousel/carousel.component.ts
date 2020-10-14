import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() exercises: string[] = [];

  constructor() { }

  public current = 0;
  public sliding = false;

  private interval: any;
  private specify: number;

  get next() {
    const NEXT = this.specify === undefined ? this.current + 1 : this.specify;
    return NEXT > this.exercises.length - 1 ? 0 : NEXT;
  }

  @HostListener('mouseenter') onMouseIn() {
    clearInterval(this.interval);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.initial();
  }

  ngOnInit(): void {
    this.initial();
  }

  public slide(index?: number) {
    if (this.exercises.length > 1) {
      if (index !== undefined) {
        this.specify = index;
      }
      this.sliding = true;
      setTimeout(_ => {
        this.sliding = false;
        if (index === undefined) {
          this.current = this.current + 1 > this.exercises.length - 1 ? 0 : this.current + 1;
        } else {
          this.current = this.specify;
          this.specify = undefined;
        }
      }, 1000);
    }
  }

  private initial() {
    if (this.exercises.length > 1) {
      this.interval = setInterval(_ => this.slide(), 3000);
    }
  }
}
