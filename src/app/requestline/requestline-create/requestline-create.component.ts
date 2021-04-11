import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';



@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  products: Product[] = [];
  requestline: RequestLine = new RequestLine();
  product: Product = null;

  constructor(
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private prdsvc: ProductService
  ) { }

  save(): void {
    this.requestline.requestId = +this.requestline.requestId;
    this.requestline.productId = +this.requestline.productId;
    console.log("B4 create", this.requestline);
    this.reqlsvc.create(this.requestline).subscribe(
      res => {
        console.log("Create Successful");
        this.router.navigateByUrl(`/requests/requestline/${this.requestline.requestId}`)
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params.id;
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
