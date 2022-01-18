import { TestBed } from '@angular/core/testing';

import { VegpizzaService } from './vegpizza.service';

describe('VegpizzaService', () => {
  let service: VegpizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegpizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
