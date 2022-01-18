import { TestBed } from '@angular/core/testing';

import { OurmenuService } from './ourmenu.service';

describe('OurmenuService', () => {
  let service: OurmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
