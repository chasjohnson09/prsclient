import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';
@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string): Vendor[] {
    let selectedvendors: Vendor[] = [];
    if(searchCriteria.length == 0){
      return vendors;
    }
    for(let vendor of vendors){
      if(
        vendor.id.toString().includes(searchCriteria.toLowerCase())
        || vendor.code.toString().includes(searchCriteria.toLowerCase())
        || vendor.name.toString().includes(searchCriteria.toLowerCase())
        || vendor.address.toString().includes(searchCriteria.toLowerCase())
        || vendor.city.toString().includes(searchCriteria.toLowerCase())
        || vendor.state.toString().includes(searchCriteria.toLowerCase())
        || vendor.zipcode.toString().includes(searchCriteria.toLowerCase())
        || (vendor.phonenumber != null &&
            vendor.phonenumber.toString().includes(searchCriteria.toLowerCase()))
        || (vendor.email != null &&
          vendor.email.toString().includes(searchCriteria.toLowerCase()))

      ){
       selectedvendors.push(vendor); 
      }
    }
    return selectedvendors;
  }
  
}
