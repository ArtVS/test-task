import { Component, OnDestroy, OnInit } from '@angular/core';
import { PriceListTable } from '../../models/price-list.dto';
import { PriceListService } from '../../services/price-list.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState, selectPriceLists } from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { getPriceLists } from '../../store/app.action';
import { ErpLogisticsSiteService } from '../../services/erp-logistics-site.service';

@Component({
  selector: 'app-price-lists',
  templateUrl: './price-lists.component.html',
  styleUrls: ['./price-lists.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PriceListsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<PriceListTable> =
    new MatTableDataSource<PriceListTable>();

  priceListsSub: Subscription = new Subscription();
  erpSub: Subscription = new Subscription();

  erpCompanyIDs: number[] = [];

  displayedColumns: string[] = ['ID', 'Name', 'ExtID'];
  constructor(
    private priceListService: PriceListService,
    private store: Store<AppState>,
    private erpLogisticsSiteService: ErpLogisticsSiteService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getPriceLists());
    //  this.erpCompanyIDs = this.erpLogisticsSiteService.getErps();
    this.priceListsSub = this.store
      .select(selectPriceLists)
      .subscribe((priceLists) => {
        this.dataSource.data = priceLists.map<PriceListTable>((priceList) => ({
          ...priceList,
          isExpanded: false,
        }));
        console.log(this.dataSource.data);
      });

    this.erpSub = this.erpLogisticsSiteService.erpChangeEvent.subscribe((x) =>
      this.store.dispatch(getPriceLists())
    );
  }

  ngOnDestroy() {
    this.priceListsSub.unsubscribe();
    this.erpSub.unsubscribe();
  }
}
