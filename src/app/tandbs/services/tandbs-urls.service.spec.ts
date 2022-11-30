import { TestBed } from '@angular/core/testing';

import { TandbsUrlsService } from './tandbs-urls.service';

describe('TandbsUrlsService', () => {
  let service: TandbsUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TandbsUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
