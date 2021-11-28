import { TestBed } from '@angular/core/testing';

import { PersistenseCartService } from './persistense-cart.service';

describe('PersistenseCartService', () => {
  let service: PersistenseCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenseCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
