import { Pipe, PipeTransform } from '@angular/core';
import { ListCustomersModel } from '../models/customers';

@Pipe({
  name: 'searchclientstype'
})
export class SearchclientstypePipe implements PipeTransform {

  transform(value: ListCustomersModel[], args?: number): ListCustomersModel[] {
    switch (args) {
      case 0:
         return value.filter((x: ListCustomersModel) => x.Category == 'جملة');
        case 1:
        return value.filter((x: ListCustomersModel) => x.Category == 'قطاعى');
        case 2:
        return value;
      default:
      return value;
    }
    }

}
