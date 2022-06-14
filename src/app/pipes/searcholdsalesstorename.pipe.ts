import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalesstorename'
})
export class SearcholdsalesstorenamePipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[], term: string): ProductSaleSelectMainInvoices[] {
    return value.filter((x: ProductSaleSelectMainInvoices) => x.StoreName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
