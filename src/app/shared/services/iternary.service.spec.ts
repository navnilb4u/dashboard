import { TestBed, inject } from '@angular/core/testing';

import { IternaryService } from './iternary.service';

describe('IternaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IternaryService]
    });
  });

  it('should be created', inject([IternaryService], (service: IternaryService) => {
    expect(service).toBeTruthy();
  }));
});
