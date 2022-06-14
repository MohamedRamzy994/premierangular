import { ListProductModel } from './../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchproductsname'
})
export class SearchproductsnamePipe implements PipeTransform {

    transform(value: ListProductModel[], term?: string): ListProductModel[] {
        return value.filter((x: ListProductModel) => x.ProductName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
