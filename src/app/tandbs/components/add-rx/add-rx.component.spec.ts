import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRxComponent } from './add-rx.component';

describe('AddRxComponent', () => {
  let component: AddRxComponent;
  let fixture: ComponentFixture<AddRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
