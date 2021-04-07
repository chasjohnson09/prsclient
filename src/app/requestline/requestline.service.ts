import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestLine } from './requestline.class'


@Injectable({
    providedIn: 'root'
})
export class RequestlineService {
    baseurl: string = 'http://localhost:54653/api/requestlines'

    constructor(
        private http: HttpClient
    ){}

    
}