import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class';
import { RequestService } from '../request/request.service';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string): Request[] {
    let selectedrequests: Request[] = [];
    if(searchCriteria.length == 0){
      return requests;
    }
    for(let request of requests){
      if(
        request.id.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.description.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.justification.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.status.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.total.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.user.username.toString().includes(searchCriteria.toLocaleLowerCase())

      ){
        selectedrequests.push(request);
      }
    }
    return selectedrequests;
  }

}
