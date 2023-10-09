import { TestBed } from '@angular/core/testing';

import { SasitiosService } from './sasitios.service';

describe('SasitiosService', () => {
  let service: SasitiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SasitiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
