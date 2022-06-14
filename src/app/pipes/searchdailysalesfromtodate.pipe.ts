import { Pipe, PipeTransform } from '@angular/core';
import { ProductDailySalesInvoices } from '../models/productsales';

@Pipe({
  name: 'searchdailysalesfromtodate'
})
export class SearchdailysalesfromtodatePipe implements PipeTransform {

  transform(value: ProductDailySalesInvoices[],  DateFrom?: Date, DateTo?: Date): ProductDailySalesInvoices[] {
    return value.filter((x: ProductDailySalesInvoices) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
