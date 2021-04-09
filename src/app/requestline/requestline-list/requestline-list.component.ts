import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from 'src/app/request/request.service';
import { Request } from '../../request/request.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  request: Request = null;

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private reqlsvc: RequestlineService,
    private reqsvc: RequestService
  ) { }

  review(): void {
    this.router.navigateByUrl(`/requests/review/${this.request.id}`)
  }

  ngOnInit(): void {
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

}
