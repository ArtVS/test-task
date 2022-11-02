import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErpLogisticsSiteService {
  @Output()
  erpChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  erpCompanyIDs: number[] = [1, 2, 3];

  getErps() {
    this.erpChangeEvent.emit(1);
    return this.erpCompanyIDs;
  }
}
