import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  request: Request = null;

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  review(): void {
    this.router.navigateByUrl(`/requests/review/${this.request.id}`)
  }

  ngOnInit(): void {
    this.request.id = this.route.snapshot.params.id;
    this.reqsvc.getreq(+this.request.id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
