import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproductshasstock'
})
export class SearchproductshasstockPipe implements PipeTransform {

  transform(value: ListProductModel[], term?: boolean): ListProductModel[] {
    if (term === false) {

      return value;

    } else if (term === true) {
      return value.filter((x: ListProductModel) => x.Stock !== 0);

    } else {

      return value;
    }


  }

}
