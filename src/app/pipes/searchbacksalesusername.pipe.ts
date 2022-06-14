import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices, ProductSaleDiscardSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searchbacksalesusername'
})
export class SearchbacksalesusernamePipe implements PipeTransform {

  transform(value: ProductSaleDiscardSelectMainInvoices[], term: string): ProductSaleDiscardSelectMainInvoices[] {
    return value.filter((x: ProductSaleDiscardSelectMainInvoices) => x.UserName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
