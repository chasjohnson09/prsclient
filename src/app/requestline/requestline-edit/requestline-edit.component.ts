import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Request} from '../../request/request.class'
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.class';
@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: RequestLine = null;
  products: Product[] = [];

  constructor(
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private prdsvc: ProductService
  ) { }
  
  save(): void {
    console.log("B4 change", this.requestline);
    this.reqlsvc.change(this.requestline).subscribe(
      res => {
        console.log("Edit successful");
        this.router.navigateByUrl(`/requests/requestline/${this.requestline.requestId}`);
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.reqlsvc.get(+id).subscribe(
      res => {
        console.log("Requestline:", res);
        this.requestline = res;
      },
      err => {
        console.error(err);
      }
    );
    
    this.prdsvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products = res as Product[];
      },
      err => {
        console.error(err);
      }      
      );
  }

}
