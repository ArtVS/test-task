import { PriceList } from '../models/price-list.dto';
import { createReducer, createSelector, on } from '@ngrx/store';
import { setPriceLists } from './app.action';

export interface AppState {
  priceListsState: PriceListState;
}

export interface PriceListState {
  priceLists: PriceList[];
}

const initialState: PriceListState = {
  priceLists: [],
};

export const appReducer = createReducer(
  initialState,
  on(setPriceLists, (state, data: { priceLists: PriceList[] }) => ({
    ...state,
    priceLists: data.priceLists,
  }))
);

export const selectPriceListsState = (state: AppState) => state.priceListsState;
export const selectPriceLists = createSelector(
  selectPriceListsState,
  (state) => state.priceLists
);
