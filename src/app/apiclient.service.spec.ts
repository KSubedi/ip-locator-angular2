/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiClientService } from './apiclient.service';

describe('ApiClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiClientService]
    });
  });

  it('should ...', inject([ApiClientService], (service: ApiClientService) => {
    expect(service).toBeTruthy();
  }));
});
