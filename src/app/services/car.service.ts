import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';
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
  
  
}
