import { TestBed } from '@angular/core/testing';

import { PriceListService } from './price-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('PriceListService', () => {
  let service: PriceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PriceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
