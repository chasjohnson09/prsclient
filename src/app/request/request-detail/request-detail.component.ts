import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = null;
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
      this.router.navigateByUrl(`request/edit/${this.id}`);
  };
  
  delete(): void {
    this.reqsvc.remove(this.request).subscribe(
      res => {
        console.log("Delete Successful", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error(err);
      }
    );
  }
  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.reqsvc.get(+this.id).subscribe(
      res => {
        console.log("Product:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
