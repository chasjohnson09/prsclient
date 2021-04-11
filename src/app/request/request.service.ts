import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { SystemService } from "../misc/system.service";
import { Request } from './request.class';


@Injectable({
    providedIn: 'root'
})
export class RequestService {

    baseurl: string = 'http://localhost:22222/api/requests'

    constructor(
        private http: HttpClient,
        private sys: SystemService
    ) {}

    list(): Observable<Request[]>{
        return this.http.get(this.baseurl) as Observable<Request[]>;
    }
    get(id: number): Observable<Request> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
    }
    create(request: Request): Observable<Request>{
        return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
    }
    change(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<Request>;
    }
    remove(request: Request): Observable<Request>{
        return this.http.delete(`${this.baseurl}/${request.id}`) as Observable<Request>;
    }
    reject(request: Request): Observable<Request>{
        return this.http.put(`${this.baseurl}/Reject/${request.id}`, request) as Observable<Request>;
    }
    approve(request: Request): Observable<Request>{
        return this.http.put(`${this.baseurl}/Approve/${request.id}`, request) as Observable<Request>;
    }
}