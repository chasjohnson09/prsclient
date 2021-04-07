import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    let selectedusers: User[] = [];
    if(searchCriteria.length == 0){
      return users;
    }
    for(let user of users){
      if(
        user.id.toString().includes(searchCriteria.toLowerCase())
        || user.username.toString().includes(searchCriteria.toLowerCase())
        || user.firstname.toString().includes(searchCriteria.toLowerCase())
        || user.lastname.toString().includes(searchCriteria.toLowerCase())

        || (user.phoneNumber != null &&
            user.phoneNumber.toString().includes(searchCriteria.toLowerCase()))
        || (user.email != null &&
         user.email.toString().includes(searchCriteria.toLowerCase()))

      ){
        selectedusers.push(user);
      }
    }
    return selectedusers;
  }

}
