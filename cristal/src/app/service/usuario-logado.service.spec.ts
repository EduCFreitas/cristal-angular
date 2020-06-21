import { TestBed } from '@angular/core/testing';

import { UsuarioLogadoService } from './usuario-logado.service';

describe('UsuarioLogadoService', () => {
  let service: UsuarioLogadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioLogadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
