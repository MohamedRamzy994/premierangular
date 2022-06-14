import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalesinvoicetype'
})
export class SearcholdsalesinvoicetypePipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[], args?: number): ProductSaleSelectMainInvoices[] {
    switch (args) {
      case 0:
         return value.filter((x: ProductSaleSelectMainInvoices) => x.InvTypeName == 'نقدى');
        case 1:
        return value.filter((x: ProductSaleSelectMainInvoices) => x.InvTypeName == 'أجل');
        case 2:
        return value;
      default:
      return value;
    }
    }

}
