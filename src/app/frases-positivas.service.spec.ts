import { TestBed } from '@angular/core/testing';

import { FrasesPositivasService } from './frases-positivas.service';

describe('FrasesPositivasService', () => {
  let service: FrasesPositivasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrasesPositivasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
