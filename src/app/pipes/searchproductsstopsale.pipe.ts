import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproductsstopsale'
})
export class SearchproductsstopsalePipe implements PipeTransform {

  transform(value: ListProductModel[], term?: boolean): ListProductModel[] {
    if (term === false) {

      return value;

    } else if (term === true) {
      return value.filter((x: ListProductModel) => x.StopSale === term);

    } else {

      return value;
    }


  }

}
