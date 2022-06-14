import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductBuySelectMainInvoices } from './../models/productbuy';

@Pipe({
  name: 'searchtproductbuymainfromtodate'
})
export class SearchtproductbuymainfromtodatePipe implements PipeTransform {

  transform(value: ProductBuySelectMainInvoices [], DateFrom?: Date, DateTo?: Date): ProductBuySelectMainInvoices[] {
    return value.filter((x: ProductBuySelectMainInvoices) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
