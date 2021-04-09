import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendor: Vendor[] = [];

  constructor(
    private prdsvc: ProductService,
    private router: Router,
    private vndsvc: VendorService
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    console.log("B4 create", this.product);
    this.prdsvc.create(this.product).subscribe(
      res => {
        console.log("Create successful");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.vndsvc.list().subscribe(
      res => {
        console.log("Vendors:", res);
        this.vendor = res as Vendor[];
      },
      err => {
        console.error(err)
      }
    );

    this.prdsvc.venlist().subscribe(
      res => {
        console.log("Products:",res);
        this.vendor = res as Vendor[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
