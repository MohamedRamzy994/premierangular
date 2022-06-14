import { ListProductOpenningBalanceInvoicesModel } from './../models/productopenningbalance';
import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproductopeningbalancefromtodate'
})
export class SearchproductopeningbalancefromtodatePipe implements PipeTransform {

  transform(value: ListProductOpenningBalanceInvoicesModel [], DateFrom?: Date, DateTo?: Date): ListProductOpenningBalanceInvoicesModel[] {



    return value.filter((x: ListProductOpenningBalanceInvoicesModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
