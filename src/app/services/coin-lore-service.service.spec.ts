import { TestBed } from '@angular/core/testing';

import { CoinLoreServiceService } from './coin-lore-service.service';

describe('CoinLoreServiceService', () => {
  let service: CoinLoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinLoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
