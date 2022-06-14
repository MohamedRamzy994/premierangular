import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproductsstopbuy'
})
export class SearchproductsstopbuyPipe implements PipeTransform {

  transform(value: ListProductModel[], term?: boolean): ListProductModel[] {
    if (term === false) {

      return value;

    } else if (term === true) {
      return value.filter((x: ListProductModel) => x.StopBuy === term);

    } else {

      return value;
    }


  }

}
