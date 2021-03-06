import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  login(): void {
    console.log("B4 Login", this.user);
    this.usrsvc.login(this.user.username, this.user.password).subscribe(
      res => {
        if (res != null) {
          console.log("User:", res, " is logged in.");
          this.sys.loggedInUser = res;
          console.log(this.sys.loggedInUser)
          this.router.navigateByUrl("/users/list");
        }
        else{
          window.alert("Username/password incorrect");
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.sys.loggedInUser = null;
  }

}
