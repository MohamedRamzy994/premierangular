import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ListSupplierMoneyDetailsModel } from '../models/suppliers';

@Pipe({
  name: 'searchsuppliermoneydetailsfromtodate'
})
export class SearchsuppliermoneydetailsfromtodatePipe implements PipeTransform {

  transform(value: ListSupplierMoneyDetailsModel[], DateFrom?: Date, DateTo?: Date): ListSupplierMoneyDetailsModel[] {



    return value.filter((x: ListSupplierMoneyDetailsModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
