import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SystemService } from "../misc/system.service";
import { ProductService } from "../product/product.service";
import { RequestService } from "../request/request.service";
import { RequestLine } from './requestline.class';
import { Product } from '../product/product.class';

@Injectable({
    providedIn: 'root'
})
export class RequestlineService {
    baseurl: string = 'http://localhost:22222/api/requestLines'

    constructor(
        private http: HttpClient,
        private router: Router,
        private sys: SystemService,
        private prdsvc: ProductService,
        private reqsvc: RequestService,
    ){}

    get(id: number): Observable<RequestLine> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
    }
    list(): Observable<Product[]>{
        return this.http.get(this.baseurl) as Observable<Product[]>
    }
    change(requestline: RequestLine): Observable<RequestLine> {
        return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<RequestLine>
    }
    remove(requestline: RequestLine): Observable<RequestLine> {
        return this.http.delete(`${this.baseurl}/${requestline.id}`) as Observable<RequestLine>
    }
    create(requestline: RequestLine): Observable<RequestLine> {
        return this.http.post(`${this.baseurl}`, requestline) as Observable<RequestLine>;
    }


    ngOnInit(): void {

    } 
    
}