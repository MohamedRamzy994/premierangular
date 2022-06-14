import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';
import { ListEmployeesModel } from '../models/employees';
import { ListSupplierProductsInStoreModel } from '../models/reports';

@Pipe({
    name: 'searchesuppliernamereport'
})
export class SearchesuppliernamereportPipe implements PipeTransform {

    transform(value: ListSupplierProductsInStoreModel[], term?: string): ListSupplierProductsInStoreModel[] {
        return value.filter((x: ListSupplierProductsInStoreModel) => x.SupplierID.toString().toLowerCase().startsWith(term.toLowerCase()));
    }

}
