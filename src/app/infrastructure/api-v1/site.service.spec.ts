import { TestBed } from '@angular/core/testing';

import { SiteService } from './site.service';

describe('CrearSitioService', () => {
  let service: SiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
