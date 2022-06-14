import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices, ProductSaleDiscardSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searchbacksalesinvoicenumber'
})
export class SearchbacksalesinvoicenumberPipe implements PipeTransform {

  transform(value: ProductSaleDiscardSelectMainInvoices[], From?: string): ProductSaleDiscardSelectMainInvoices[] {
    return value.filter((x: ProductSaleDiscardSelectMainInvoices) => (x.DiscardID.toString().startsWith(From)));
}

}
