import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';
import { ListEmployeesModel } from '../models/employees';
import { ListSupplierProductsInStoreModel, ListSelectAdditionalCostEventToReport } from '../models/reports';

@Pipe({
    name: 'searcheslaespointnamereport'
})
export class SearcheslaespointnamereportPipe implements PipeTransform {

    transform(value: ListSelectAdditionalCostEventToReport[], term?: string): ListSelectAdditionalCostEventToReport[] {
        return value.filter((x: ListSelectAdditionalCostEventToReport) => x.SalesPoint.toLowerCase().startsWith(term.toLowerCase()));
    }

}
