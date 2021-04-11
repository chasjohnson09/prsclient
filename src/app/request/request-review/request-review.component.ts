import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  request: Request = null;
  requestlines: RequestLine[] = [];

  constructor(
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private router: Router

  ) { }
  reject(): void {
    this.reqsvc.reject(+id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => { 
        console.error(err);
      }
    );
  }
  approve(): void {
    this.reqsvc.approve(+id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => { 
        console.error(err);
      }
    );
  
  }
  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.reqsvc.get(+id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.refresh();


  }

}
