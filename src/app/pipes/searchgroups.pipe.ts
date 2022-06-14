import { Productgroups } from './../models/productgroups';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchgroups'
})
export class SearchgroupsPipe implements PipeTransform {

  transform(value: Productgroups[], term: string): Productgroups[] {
    return value.filter((x: Productgroups) => x.CatName.toLowerCase().startsWith(term.toLowerCase()));

  }

}
