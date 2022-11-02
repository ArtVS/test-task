import { createAction, props } from '@ngrx/store';
import { PriceList } from '../models/price-list.dto';

export const getPriceLists = createAction('Get Price Lists');
export const setPriceLists = createAction(
  'Set Price Lists',
  props<{ priceLists: PriceList[] }>()
);
export const updatePriceList = createAction(
  'Update Price List',
  props<{ priceList: Partial<PriceList> }>()
);
