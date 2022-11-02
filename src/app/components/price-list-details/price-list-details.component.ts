import { Component, Input, OnInit } from '@angular/core';
import { PriceList } from '../../models/price-list.dto';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { updatePriceList } from '../../store/app.action';

@Component({
  selector: 'app-price-list-details',
  templateUrl: './price-list-details.component.html',
  styleUrls: ['./price-list-details.component.scss'],
})
export class PriceListDetailsComponent implements OnInit {
  @Input() priceList!: PriceList;

  ngOnInit(): void {}

  onSubmit(priceListForm: NgForm) {
    if (!priceListForm.valid) {
      return;
    }

    const priceListID = this.priceList.priceListID;
    const priceListName = priceListForm.value.name;
    const extErpPriceListID = priceListForm.value.extID;

    const priceList: PriceList = {
      priceListID,
      priceListName,
      extErpPriceListID,
    };

    this.store.dispatch(updatePriceList({ priceList }));
  }

  constructor(private store: Store<AppState>) {}
}
