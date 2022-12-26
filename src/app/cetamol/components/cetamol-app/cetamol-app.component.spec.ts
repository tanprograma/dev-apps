import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetamolAppComponent } from './cetamol-app.component';

describe('CetamolAppComponent', () => {
  let component: CetamolAppComponent;
  let fixture: ComponentFixture<CetamolAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetamolAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CetamolAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
