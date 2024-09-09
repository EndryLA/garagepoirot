import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient){}

  getServices() :Observable<Service[]>{
    return this.http.get<Service[]>(environment.ApiBaseUrl + '/services')
  }

  getService(id: number) :Observable<Service>{
    return this.http.get<Service[]>(environment.ApiBaseUrl + `/services/${id}`).pipe(
      map(service => service[0])
    )
  }

  getNServices(n: number): Observable<Service[]> {
    return this.getServices().pipe(
      map(services => services.slice(0, n)) 
    );
  }

  createService(formData :any) :Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
  })
    return this.http.post<any>(environment.ApiBaseUrl + '/services',formData,{headers:headers})
  }

  updateService(formData :any,id:any) :Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
  })
    return this.http.put<any>(environment.ApiBaseUrl + `/services/${id}`,formData,{headers:headers})
  }

  deleteService(id: any) :Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
    })

    return this.http.delete<any>(environment.ApiBaseUrl + `/services/${id}`,{headers:headers})
  }


}
