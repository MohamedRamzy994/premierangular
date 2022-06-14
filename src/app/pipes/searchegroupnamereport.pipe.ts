import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';
import { ListEmployeesModel } from '../models/employees';
import { ListSupplierProductsInStoreModel } from '../models/reports';

@Pipe({
    name: 'searchegroupnamereport'
})
export class SearchegroupnamereportPipe implements PipeTransform {

    transform(value: ListSupplierProductsInStoreModel[], term?: string): ListSupplierProductsInStoreModel[] {
        return value.filter((x: ListSupplierProductsInStoreModel) => x.CatName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
