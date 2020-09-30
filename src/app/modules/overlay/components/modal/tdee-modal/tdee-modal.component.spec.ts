import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeModalComponent } from './tdee-modal.component';

describe('TdeeModalComponent', () => {
  let component: TdeeModalComponent;
  let fixture: ComponentFixture<TdeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
