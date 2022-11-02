import { Injectable } from '@angular/core';
import { PriceList } from '../models/price-list.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const path = environment.databaseUrl + 'price-list.json';
const putPath = environment.databaseUrl + 'price-list/';

@Injectable({
  providedIn: 'root',
})
export class PriceListService {
  constructor(private http: HttpClient) {}

  getPriceLists() {
    return this.http.get<PriceList[]>(path);
  }

  updatePriceList(priceList: Partial<PriceList>) {
    const id = priceList.priceListID;
    return this.http.put<PriceList>(putPath + `${id}.json`, priceList);
  }
}
