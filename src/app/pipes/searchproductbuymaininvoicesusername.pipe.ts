import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';
import { ProductBuySelectMainInvoices } from '../models/productbuy';

@Pipe({
    name: 'searchproductbuymaininvoicesusername'
})
export class SearchproductbuymaininvoicesusernamePipe implements PipeTransform {

    transform(value: ProductBuySelectMainInvoices[], From?: string): ProductBuySelectMainInvoices[] {
        return value.filter((x: ProductBuySelectMainInvoices) => (x.UserName.startsWith(From)));
    }

}
