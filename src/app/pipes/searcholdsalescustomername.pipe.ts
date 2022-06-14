import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalescustomername'
})
export class SearcholdsalescustomernamePipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[], From?: string): ProductSaleSelectMainInvoices[] {
    return value.filter((x: ProductSaleSelectMainInvoices) => (x.CustomerName.startsWith(From)));
}

}
