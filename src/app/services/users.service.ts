import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  token = localStorage.getItem('gp-token')

  headers = new HttpHeaders({
    "Authorization": `Bearer ${this.token}`
  })

  getUsers():Observable<User[]>{


    return this.http.get<User[]>(environment.ApiBaseUrl + '/users', {headers:this.headers})
  }


  createUser(formData: any):Observable<any> {

    return this.http.post<any>(environment.ApiBaseUrl + '/users',formData, {headers:this.headers})
    
  }

}
