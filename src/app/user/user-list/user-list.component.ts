import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  serachCriteria: string="";

  constructor(
    private usrsvc: UserService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {

    this.usrsvc.list().subscribe(
      res => {
        console.log("Users:", res);
        this.users = res as User[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
