import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(userData :object) :Observable<any> {
    return this.http.post(environment.ApiBaseUrl + '/users/login', userData).pipe(
      tap((data: any) => {
        localStorage.setItem('token',data.token)
      })
    )
  }

}
