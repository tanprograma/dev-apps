import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsRecordsDispensedComponent } from './pms-records-dispensed.component';

describe('PmsRecordsDispensedComponent', () => {
  let component: PmsRecordsDispensedComponent;
  let fixture: ComponentFixture<PmsRecordsDispensedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmsRecordsDispensedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmsRecordsDispensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
