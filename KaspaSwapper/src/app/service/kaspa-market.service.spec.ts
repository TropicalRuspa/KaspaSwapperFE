import { TestBed } from '@angular/core/testing';

import { KaspaMarketService } from './kaspa-market.service';

describe('KaspaMarketService', () => {
  let service: KaspaMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaspaMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
