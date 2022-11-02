import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPriceLists, setPriceLists, updatePriceList } from './app.action';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError, of } from 'rxjs';
import { PriceListService } from '../services/price-list.service';
import { PriceList } from '../models/price-list.dto';
import { HttpErrorResponse } from '@angular/common/http';

export const handleError = (err: HttpErrorResponse) => {
  alert(err.message);
  return of({ type: 'Dummy' });
};

@Injectable()
export class AppEffect {
  getPriceLists$ = createEffect(() =>
    this.action$.pipe(
      ofType<Action>(getPriceLists.type),
      switchMap(() => this.priceListService.getPriceLists()),
      map((priceLists) => setPriceLists({ priceLists })),
      catchError(handleError)
    )
  );

  updatePriceList$ = createEffect(() =>
    this.action$.pipe(
      ofType<Action & { priceList: Partial<PriceList> }>(updatePriceList.type),
      switchMap(({ priceList }) =>
        this.priceListService.updatePriceList(priceList)
      ),
      map(() => getPriceLists()),
      catchError(handleError)
    )
  );

  constructor(
    private action$: Actions,
    private priceListService: PriceListService
  ) {}
}
