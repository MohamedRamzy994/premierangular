import { Pipe, PipeTransform } from '@angular/core';
import {ProductSaleDiscardSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searchbacksalesbillsfromtodate'
})
export class SearchbacksalesbillsfromtodatePipe implements PipeTransform {

  transform(value: ProductSaleDiscardSelectMainInvoices[],  DateFrom?: Date, DateTo?: Date): ProductSaleDiscardSelectMainInvoices[] {
    return value.filter((x: ProductSaleDiscardSelectMainInvoices) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
