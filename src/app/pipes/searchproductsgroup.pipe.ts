import { ListProductModel } from './../models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchproductsgroup'
})
export class SearchproductsgroupPipe implements PipeTransform {

    transform(value: ListProductModel[], term?: string): ListProductModel[] {
        return value.filter((x: ListProductModel) => x.CatName.toLowerCase().startsWith(term.toLowerCase()));
    }

}
