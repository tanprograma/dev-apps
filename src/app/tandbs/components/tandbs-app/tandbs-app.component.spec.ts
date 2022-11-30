import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandbsAppComponent } from './tandbs-app.component';

describe('TandbsAppComponent', () => {
  let component: TandbsAppComponent;
  let fixture: ComponentFixture<TandbsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandbsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandbsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
