import { TestBed } from '@angular/core/testing';

import { CrearSitioService } from './crear-sitio.service';

describe('CrearSitioService', () => {
  let service: CrearSitioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearSitioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
