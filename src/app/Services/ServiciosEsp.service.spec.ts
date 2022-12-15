/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiciosEspService } from './ServiciosEsp.service';

describe('Service: ServiciosEsp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosEspService]
    });
  });

  it('should ...', inject([ServiciosEspService], (service: ServiciosEspService) => {
    expect(service).toBeTruthy();
  }));
});
