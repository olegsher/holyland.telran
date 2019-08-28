import { TestBed } from '@angular/core/testing';

import { CarsListService } from './listofcars.service';

describe('ListofcarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsListService = TestBed.get(CarsListService);
    expect(service).toBeTruthy();
  });
});
