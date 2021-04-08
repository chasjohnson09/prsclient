import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  searchCriteria: string = '';
  users: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private reqlsvc: RequestlineService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe(
      res => {
        console.log("Requests:", res);
        this.requests = res as unknown as Request[];
      },
      err => {
        console.error(err);
      }
    );
  };

}
