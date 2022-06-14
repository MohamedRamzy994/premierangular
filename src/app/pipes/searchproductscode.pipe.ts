import { ListProductModel } from '../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchproductscode'
})
export class SearchproductscodePipe implements PipeTransform {

    transform(value: ListProductModel[], term?: string): ListProductModel[] {
        return value.filter((x: ListProductModel) => x.ProductCode.toLowerCase().startsWith(term.toLowerCase()));
    }

}
