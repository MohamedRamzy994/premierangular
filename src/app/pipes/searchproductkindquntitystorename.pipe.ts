import { ListProductResetStockeModel } from './../models/productresetstock';
import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';
import { ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';

@Pipe({
    name: 'searchproductkindquntitystorename'
})
export class SearchproductkindquntitystorenamePipe implements PipeTransform {

    transform(value: ListProductResetStockeModel[], From?: string): ListProductResetStockeModel[] {
        return value.filter((x: ListProductResetStockeModel) => (x.StoreName.startsWith(From)));
    }

}
