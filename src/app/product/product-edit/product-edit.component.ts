import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;
  vendor: Vendor[] = [];
  
  constructor(
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  

  save(): void {
    console.log("B4 change", this.product);
    this.prdsvc.change(this.product).subscribe(
      res => {
        console.log("Edit successful");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.prdsvc.get(+id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );

    this.prdsvc.venlist().subscribe(
      res => {
        console.log("Vendors:",res);
        this.vendor = res as Vendor[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
