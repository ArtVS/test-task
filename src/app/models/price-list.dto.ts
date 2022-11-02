export interface PriceList {
  priceListID: number;
  priceListName: string;
  extErpPriceListID: number | null;
}
export interface PriceListTable extends PriceList {
  isExpanded: boolean;
}
