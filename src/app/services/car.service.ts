import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
  
})
export class CarService {



  constructor(private http: HttpClient){}

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(environment.ApiBaseUrl + '/cars');
  }

  getNCars(n: number): Observable<Car[]> {
    return this.getCars().pipe(
      map(cars => cars.slice(0, n)) 
    );
  }

  getCar(id: number) :Observable<Car>{
    return this.http.get<Car[]>(environment.ApiBaseUrl + `/cars/${id}`).pipe(
      map(car => car[0])
    )
  } 
  
  createCar(formData :any) :Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
  })
    return this.http.post<any>(environment.ApiBaseUrl + '/cars',formData,{headers:headers})
  }
  
  deleteCar(id: number) :Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
    })

    return this.http.delete<any>(environment.ApiBaseUrl + `/cars/${id}`,{headers:headers})
  }

  updateCar(formData: any,id:number): Observable<any> {
    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
    })

    return this.http.put<any>(environment.ApiBaseUrl + `/cars/${id}`,formData, {headers:headers})

  }

  
}
