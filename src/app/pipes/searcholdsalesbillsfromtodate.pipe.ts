import { Pipe, PipeTransform } from '@angular/core';
import { ProductSaleSelectMainInvoices } from '../models/productsales';

@Pipe({
  name: 'searcholdsalesbillsfromtodate'
})
export class SearcholdsalesbillsfromtodatePipe implements PipeTransform {

  transform(value: ProductSaleSelectMainInvoices[],  DateFrom?: Date, DateTo?: Date): ProductSaleSelectMainInvoices[] {
    return value.filter((x: ProductSaleSelectMainInvoices) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
