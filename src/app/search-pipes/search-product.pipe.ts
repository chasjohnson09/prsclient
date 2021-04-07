import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string): Product[] {
    let selectedproducts: Product[] = [];
    if(searchCriteria.length == 0){
      return products;
    }
    for(let product of products){
      if(
        product.id.toString().includes(searchCriteria.toLowerCase())
        || product.partNbr.toString().includes(searchCriteria.toLowerCase())
        || product.name.toString().includes(searchCriteria.toLowerCase())
        || product.price.toString().includes(searchCriteria.toLowerCase())
        || product.unit.toString().includes(searchCriteria.toLowerCase())
        || product.vendor.name.toString().includes(searchCriteria.toLowerCase())
      ){
        selectedproducts.push(product);
      }
    }
    return selectedproducts;
  }

}
