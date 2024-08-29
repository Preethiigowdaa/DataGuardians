import { TestBed } from '@angular/core/testing';

import { SpecHttpService } from './spec-http.service';

describe('SpecHttpService', () => {
  let service: SpecHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
