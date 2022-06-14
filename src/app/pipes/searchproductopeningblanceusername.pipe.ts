import { ListProductOpenningBalanceModel, ListProductOpenningBalanceInvoicesModel } from '../models/productopenningbalance';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchproductopeningblanceusername'
})
export class SearchproductopeningblanceusernamePipe implements PipeTransform {

    transform(value: ListProductOpenningBalanceInvoicesModel[], term?: string): ListProductOpenningBalanceInvoicesModel[] {
        return value.filter((x: ListProductOpenningBalanceInvoicesModel) => x.UserName.startsWith(term));
    }

}
