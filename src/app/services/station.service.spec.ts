import { TestBed } from '@angular/core/testing';

import { stationService } from './station.service';

describe('tripService', () => {
  let service: stationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(stationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
