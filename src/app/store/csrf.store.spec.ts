import { TestBed } from '@angular/core/testing';

import { CsrfStore } from './csrf.store';

describe('CsrfStore', () => {
  let service: CsrfStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrfStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
