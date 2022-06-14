import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices, ProductSaleDiscardSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searchbacksalescustomername'
})
export class SearchbacksalescustomernamePipe implements PipeTransform {

  transform(value: ProductSaleDiscardSelectMainInvoices[], From?: string): ProductSaleDiscardSelectMainInvoices[] {
    return value.filter((x: ProductSaleDiscardSelectMainInvoices) => (x.CustomerName.startsWith(From)));
}

}
