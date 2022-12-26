import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsAppComponent } from './pms-app.component';

describe('PmsAppComponent', () => {
  let component: PmsAppComponent;
  let fixture: ComponentFixture<PmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
