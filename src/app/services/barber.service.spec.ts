import { TestBed, inject } from '@angular/core/testing';

import { BarberService } from './barber.service';

describe('TimeTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarberService]
    });
  });

  it('should be created', inject([BarberService], (service: BarberService) => {
    expect(service).toBeTruthy();
  }));
});
