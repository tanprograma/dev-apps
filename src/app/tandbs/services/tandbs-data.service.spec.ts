import { TestBed } from '@angular/core/testing';

import { TandbsDataService } from './tandbs-data.service';

describe('TandbsDataService', () => {
  let service: TandbsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TandbsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
