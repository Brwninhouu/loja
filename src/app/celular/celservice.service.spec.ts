import { TestBed } from '@angular/core/testing';

import { CelserviceService } from './celservice.service';

describe('CelserviceService', () => {
  let service: CelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
