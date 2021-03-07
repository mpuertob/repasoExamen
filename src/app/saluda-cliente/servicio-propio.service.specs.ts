import { TestBed } from '@angular/core/testing';

import { ServicioPropioService } from './servicio-propio.service';

describe('ServicioPropioService', () => {
  let service: ServicioPropioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPropioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
