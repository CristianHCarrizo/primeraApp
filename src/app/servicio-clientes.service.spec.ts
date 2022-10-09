import { TestBed } from '@angular/core/testing';

import { ServicioClientesService } from './servicio-clientes.service';

describe('ServicioClientesService', () => {
  let service: ServicioClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
