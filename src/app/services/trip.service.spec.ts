import { TestBed } from '@angular/core/testing';

import { tripService } from './trip.service';

describe('tripService', () => {
  let service: tripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
