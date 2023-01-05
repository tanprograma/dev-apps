import { TestBed } from '@angular/core/testing';

import { MigdataService } from './migdata.service';

describe('MigdataService', () => {
  let service: MigdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
