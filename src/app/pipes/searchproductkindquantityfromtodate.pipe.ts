import { ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';
import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ListProductResetStockeModel } from '../models/productresetstock';

@Pipe({
  name: 'searchproductkindquantityfromtodate'
})
export class SearchproductkindquantityfromtodatePipe implements PipeTransform {

  transform(value: ListProductResetStockeModel [], DateFrom?: Date, DateTo?: Date): ListProductResetStockeModel[] {

    return value.filter((x: ListProductResetStockeModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
