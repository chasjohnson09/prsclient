import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.class";
import { HttpClient } from "@angular/common/http";
import { Vendor } from "../vendor/vendor.class";
import { SystemService } from "../misc/system.service";


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseurl: string = 'http://localhost:22222/api/products'

    constructor(
        private http: HttpClient,
        private sys: SystemService
    ) {}

    venlist(): Observable<Vendor[]>{
        return this.http.get('http://localhost:22222/api/vendors') as Observable<Vendor[]>
    }

    list(): Observable<Product[]>{
        return this.http.get(this.baseurl) as Observable<Product[]>
    }
    get(id:number): Observable<Product> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>
    }
    create(product: Product): Observable<Product> {
        return this.http.post(`${this.baseurl}`, product) as Observable<Product>
    }
    change(product: Product): Observable<any> {
        return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<Product>
    }
    remove(product: Product): Observable<Product> {
        return this.http.delete(`${this.baseurl}/${product.id}`) as Observable<Product>
    }
}