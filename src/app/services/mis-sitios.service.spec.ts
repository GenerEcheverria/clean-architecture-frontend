import { TestBed } from '@angular/core/testing';

import { MisSitiosService } from './mis-sitios.service';

describe('MisSitiosService', () => {
  let service: MisSitiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisSitiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
