import { TestBed } from '@angular/core/testing';

import { NonvegpizzaService } from './nonvegpizza.service';

describe('NonvegpizzaService', () => {
  let service: NonvegpizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonvegpizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
