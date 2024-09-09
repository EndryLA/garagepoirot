import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated: boolean = false


  constructor(
    private http:HttpClient,
    private router:Router

  ) { }

  authenticate(userData :object) :Observable<any> {
    return this.http.post(environment.ApiBaseUrl + '/users/login', userData).pipe(
      tap((data: any) => {
        localStorage.setItem('gp-token',data.token)
        this.router.navigate([''])
      })
    )
  }
  checkAuthentication() :boolean{
    if (localStorage.getItem('gp-token')) {
      return true
    } else {
      return false
    }
  }
  
  logout() {
    this.isAuthenticated = false
    localStorage.removeItem('gp-token')
    this.router.navigate([''])
    window.location.reload()
  }



  

}
