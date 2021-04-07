import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import {HttpClient} from '@angular/common/http'
import { SystemService } from '../misc/system.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl:string = 'http://localhost:22222/api/users'
  
  
  
  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) {}

  list(): Observable<User[]>{
    return this.http.get(this.baseurl) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }
  remove(user: User): Observable<User> {
    return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
  }
  login(username: string, password: string): Observable<User>{
    return this.http.get(`${this.baseurl}/login?${username}/${password}`) as Observable<User>;
  }
}
