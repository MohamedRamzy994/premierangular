import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';

@Pipe({
    name: 'searchsuppliername'
})
export class SearchsuppliernamePipe implements PipeTransform {

    transform(value: SupplierModel[], term?: string): SupplierModel[] {
        return value.filter((x: SupplierModel) => x.SupplierName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
