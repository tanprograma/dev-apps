import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsMigrateComponent } from './pms-migrate.component';

describe('PmsMigrateComponent', () => {
  let component: PmsMigrateComponent;
  let fixture: ComponentFixture<PmsMigrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmsMigrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmsMigrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
