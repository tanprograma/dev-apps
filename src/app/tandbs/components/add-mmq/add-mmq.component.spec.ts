import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMmqComponent } from './add-mmq.component';

describe('AddMmqComponent', () => {
  let component: AddMmqComponent;
  let fixture: ComponentFixture<AddMmqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMmqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMmqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
