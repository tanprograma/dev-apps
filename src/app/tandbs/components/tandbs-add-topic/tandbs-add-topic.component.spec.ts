import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandbsAddTopicComponent } from './tandbs-add-topic.component';

describe('TandbsAddTopicComponent', () => {
  let component: TandbsAddTopicComponent;
  let fixture: ComponentFixture<TandbsAddTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandbsAddTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandbsAddTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
