import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeCardComponent } from './tdee-card.component';

describe('TdeeCardComponent', () => {
  let component: TdeeCardComponent;
  let fixture: ComponentFixture<TdeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
