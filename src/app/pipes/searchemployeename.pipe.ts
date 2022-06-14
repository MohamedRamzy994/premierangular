import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/suppliers';
import { ListEmployeesModel } from '../models/employees';

@Pipe({
    name: 'searchemployeename'
})
export class SearchemployeenamePipe implements PipeTransform {

    transform(value: ListEmployeesModel[], term?: string): ListEmployeesModel[] {
        return value.filter((x: ListEmployeesModel) => x.EmpName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
