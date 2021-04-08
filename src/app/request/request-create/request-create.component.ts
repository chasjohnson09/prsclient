import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    this.request.userId = +this.sys.loggedInUser.id;
    console.log("B4 create", this.request);
    this.reqsvc.create(this.request).subscribe(
      res => {
        console.log("Create Successful");
        this.router.navigateByUrl(`/requests/requestline/${this.request.id}`);
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    
  }

}
