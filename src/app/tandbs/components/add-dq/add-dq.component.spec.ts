import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDqComponent } from './add-dq.component';

describe('AddDqComponent', () => {
  let component: AddDqComponent;
  let fixture: ComponentFixture<AddDqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
