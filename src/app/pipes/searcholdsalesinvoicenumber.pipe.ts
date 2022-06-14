import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalesinvoicenumber'
})
export class SearcholdsalesinvoicenumberPipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[], From?: string): ProductSaleSelectMainInvoices[] {
    return value.filter((x: ProductSaleSelectMainInvoices) => (x.InvoiceID.toString().startsWith(From)));
}

}
