import { ListTransferKindModel } from '../models/transferkinds';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchtransferkindusername'
})
export class SearchtransferkindusernamePipe implements PipeTransform {

    transform(value: ListTransferKindModel[], term?: string): ListTransferKindModel[] {
        return value.filter((x: ListTransferKindModel) => x.UserName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
