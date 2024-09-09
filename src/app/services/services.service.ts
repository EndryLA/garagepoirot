import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Service>(environment.ApiBaseUrl + `/services/${id}`)
  }

  getNServices(n: number): Observable<Service[]> {
    return this.getServices().pipe(
      map(services => services.slice(0, n)) 
    );
  }


}
