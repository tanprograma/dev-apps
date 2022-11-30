import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandbsAddQuestionComponent } from './tandbs-add-question.component';

describe('TandbsAddQuestionComponent', () => {
  let component: TandbsAddQuestionComponent;
  let fixture: ComponentFixture<TandbsAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandbsAddQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandbsAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
