import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproductsprice'
})
export class SearchproductspricePipe implements PipeTransform {

  transform(value: ListProductModel[], from?: number, to?: number): ListProductModel[] {
    if (from === undefined || to === undefined) {

      return value;

    } else if (from === null && to === null) {

      return value;

    } else {
      return value.filter((x: ListProductModel) => x.Price >= from && x.Price <= to);
    }


  }

}
