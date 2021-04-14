import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from 'src/app/request/request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  requests: Request[] = [];
  searchCriteria: string = '';
  users: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private reqlsvc: RequestlineService
  ) { }

  ngOnInit(): void {
    let id = this.sys.loggedInUser.id;
    this.reqsvc.reviewlist(+id).subscribe(
      res => {
        console.log("Requests:", res);
        this.requests = res as unknown as Request[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
