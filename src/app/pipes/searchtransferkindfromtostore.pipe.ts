import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchtransferkindfromtostore'
})
export class SearchtransferkindfromtostorePipe implements PipeTransform {

    transform(value: ListTransferKindModel[], From?: string , To?: string): ListTransferKindModel[] {
        return value.filter((x: ListTransferKindModel) => (x.StoreName.startsWith(From)
        && x.StoreTo.startsWith(To)));
    }

}
