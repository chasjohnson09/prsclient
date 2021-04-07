import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`product/edit/${this.id}`);
  }

  delete(): void {
    this.prdsvc.remove(this.product).subscribe(
      res => {
        console.log("Delete Successful", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.prdsvc.get(+this.id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
