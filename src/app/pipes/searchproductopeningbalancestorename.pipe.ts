import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';

@Pipe({
    name: 'searchproductopeningbalancestorename'
})
export class SearchproductopeningbalancestorenamePipe implements PipeTransform {

    transform(value: ListProductOpenningBalanceInvoicesModel[], From?: string): ListProductOpenningBalanceInvoicesModel[] {
        return value.filter((x: ListProductOpenningBalanceInvoicesModel) => (x.StoreName.startsWith(From)));
    }

}
