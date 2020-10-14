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

  get next() {
    const NEXT = this.current + 1;
    return NEXT > this.exercises.length - 1 ? 0 : NEXT;
  }

  @HostListener('mouseenter') onMouseIn() {
    clearInterval(this.interval);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.interval = setInterval(
      _ => this.slide(this.current + 1 > this.exercises.length - 1 ? 0 : this.current + 1),
      3800
    );
  }

  ngOnInit(): void {
    this.inital();
  }

  public slide(index: number) {
    this.sliding = true;
    setTimeout(_ => {
      this.sliding = false;
      this.current = index;
    }, 1000);
  }

  private inital() {
    this.interval = setInterval(
      _ => this.slide(this.current + 1 > this.exercises.length - 1 ? 0 : this.current + 1),
      3000
    )
  }

}
