import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SystemService } from "../misc/system.service";
import { RequestLine } from './requestline.class'


@Injectable({
    providedIn: 'root'
})
export class RequestlineService {
    baseurl: string = 'http://localhost:22222/api/requestlines'

    constructor(
        private http: HttpClient,
        private router: Router,
        private sys: SystemService
    ){}


    
}