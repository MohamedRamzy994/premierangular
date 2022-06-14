import { Stores } from './../models/stores';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchstores'
})
export class SearchstoresPipe implements PipeTransform {

  transform(value: Stores[], term: string): Stores[] {
    return value.filter((x: Stores) => x.StoreName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
