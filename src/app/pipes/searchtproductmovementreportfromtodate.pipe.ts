import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductBuySelectMainInvoices } from '../models/productbuy';
import { ListProductMoveMentReportModel } from '../models/reports';

@Pipe({
  name: 'searchtproductmovementreportfromtodate'
})
export class SearchtproductmovementreportfromtodatePipe implements PipeTransform {

  transform(value: ListProductMoveMentReportModel [], DateFrom?: Date, DateTo?: Date): ListProductMoveMentReportModel[] {
    return value.filter((x: ListProductMoveMentReportModel) => (

      new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)
    ));
  }

}
