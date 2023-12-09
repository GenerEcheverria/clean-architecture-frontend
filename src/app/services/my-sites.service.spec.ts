import { TestBed } from '@angular/core/testing';

import { MySitesService } from './my-sites.service';

describe('MisSitiosService', () => {
  let service: MySitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
