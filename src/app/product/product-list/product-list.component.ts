import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = '';
  vendors: Vendor[] =[];

  constructor(
    private prdsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prdsvc.list().subscribe(
    res => {
      console.log("Products:", res);
      this.products = res as Product[];
    },
    err => {
      console.error(err);
    }      
    );

  };

}
