import { ListProductResetStockeModel } from './../models/productresetstock';
import { ListProductOpenningBalanceModel, ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchproductkindquntityusername'
})
export class SearchproductkindquntityusernamePipe implements PipeTransform {

    transform(value: ListProductResetStockeModel[], term?: string): ListProductResetStockeModel[] {
        return value.filter((x: ListProductResetStockeModel) => x.UserName.startsWith(term));
    }

}
