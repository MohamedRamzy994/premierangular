import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtransferkindfromtodate'
})
export class SearchtransferkindfromtodatePipe implements PipeTransform {

  transform(value: ListTransferKindModel[], DateFrom?: Date, DateTo?: Date): ListTransferKindModel[] {



    return value.filter((x: ListTransferKindModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
