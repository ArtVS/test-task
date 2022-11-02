import { TestBed } from '@angular/core/testing';

import { ErpLogisticsSiteService } from './erp-logistics-site.service';

describe('ErpLogisticsSiteService', () => {
  let service: ErpLogisticsSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpLogisticsSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
