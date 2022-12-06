import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTfComponent } from './add-tf.component';

describe('AddTfComponent', () => {
  let component: AddTfComponent;
  let fixture: ComponentFixture<AddTfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
