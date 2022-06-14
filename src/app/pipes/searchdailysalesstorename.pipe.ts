import { Pipe, PipeTransform } from '@angular/core';
import { ProductDailySalesInvoices } from '../models/productsales';

@Pipe({
  name: 'searchdailysalesstorename'
})
export class SearchdailysalesstorenamePipe implements PipeTransform {

  transform(value: ProductDailySalesInvoices[], args?: number): ProductDailySalesInvoices[] {
    if (args == 0) {
     return value ;
    } else {
      return value.filter((x: ProductDailySalesInvoices) => x.StoreID == args);

    }
  }
}
