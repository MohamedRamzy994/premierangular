import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';
import { ListEmployeesModel } from '../models/employees';
import { ListSupplierProductsInStoreModel, ListSelectAdditionalCostEventToReport } from '../models/reports';

@Pipe({
    name: 'searchereasonnamereport'
})
export class SearchereasonnamereportPipe implements PipeTransform {

    transform(value: ListSelectAdditionalCostEventToReport[], term?: string): ListSelectAdditionalCostEventToReport[] {
        return value.filter((x: ListSelectAdditionalCostEventToReport) => x.Reason.toLowerCase().startsWith(term.toLowerCase()));
    }

}
