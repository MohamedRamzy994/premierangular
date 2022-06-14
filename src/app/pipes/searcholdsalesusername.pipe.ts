import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalesusername'
})
export class SearcholdsalesusernamePipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[], term: string): ProductSaleSelectMainInvoices[] {
    return value.filter((x: ProductSaleSelectMainInvoices) => x.UserName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
