import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandbsAddDrugComponent } from './tandbs-add-drug.component';

describe('TandbsAddDrugComponent', () => {
  let component: TandbsAddDrugComponent;
  let fixture: ComponentFixture<TandbsAddDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandbsAddDrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandbsAddDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
