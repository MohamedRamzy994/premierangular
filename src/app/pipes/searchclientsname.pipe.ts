import { Pipe, PipeTransform } from '@angular/core';
import { ListCustomersModel } from '../models/customers';

@Pipe({
  name: 'searchclientsname'
})
export class SearchclientsnamePipe implements PipeTransform {

  transform(value: ListCustomersModel[], args?: string): ListCustomersModel[] {
    return value.filter((x: ListCustomersModel) => x.CustomerName.toLowerCase()
    .startsWith(args.toLowerCase()));
  }

}
