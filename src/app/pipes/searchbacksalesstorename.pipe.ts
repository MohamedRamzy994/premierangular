import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices, ProductSaleDiscardSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searchbacksalesstorename'
})
export class SearchbacksalesstorenamePipe implements PipeTransform {

  transform(value: ProductSaleDiscardSelectMainInvoices[], term: string): ProductSaleDiscardSelectMainInvoices[] {
    return value.filter((x: ProductSaleDiscardSelectMainInvoices) => x.StoreName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
