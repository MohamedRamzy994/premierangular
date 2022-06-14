import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductBuySelectMainInvoices } from '../models/productbuy';
import { ListCommisionAndPunishByDateModel } from '../models/employees';

@Pipe({
  name: 'searchemployeecompunfromtodate'
})
export class SearchemployeecompunfromtodatePipe implements PipeTransform {

  transform(value: ListCommisionAndPunishByDateModel [], DateFrom?: Date, DateTo?: Date): ListCommisionAndPunishByDateModel[] {
    return value.filter((x: ListCommisionAndPunishByDateModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
