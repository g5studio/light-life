import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectQuestionModalComponent } from './project-question-modal.component';

describe('ProjectQuestionModalComponent', () => {
  let component: ProjectQuestionModalComponent;
  let fixture: ComponentFixture<ProjectQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
