import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
  id: any;
  showVerifya: boolean = false;
  showVerifyj: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private router: Router,
    private sys: SystemService
  ) { }
  reject(): void {
    if (this.sys.loggedInUser.isReviewer == true) {
      this.reqsvc.reject(this.request).subscribe(
        res => {
          console.log("Request:", res);
          this.request = res;
          this.router.navigateByUrl("/requests/list");
        },
        err => {
          console.error(err);
        }
      );
    } else {
      window.alert("User does not have permission");
    }

  }
  approve(): void {
    if (this.sys.loggedInUser.isReviewer == true) {
    this.reqsvc.approve(this.request).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }

    );
  } else {
    window.alert("User does not have permission");
  }
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
  toggleVerifya(): void {
    this.showVerifya = !this.showVerifya;
  }
  toggleVerifyj(): void {
    this.showVerifyj = !this.showVerifyj;
  }
  ngOnInit(): void {
    this.refresh();


  }

}
