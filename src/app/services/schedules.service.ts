import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Schedule } from '../models/schedule';
@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private http:HttpClient) { }

  getSchedules() :Observable<Schedule[]> {
    return this.http.get<Schedule[]>(environment.ApiBaseUrl + '/schedules')
  }

  getSchedule(day: string) :Observable<Schedule> {
    return this.http.get<Schedule>(environment.ApiBaseUrl + `/schedules/${day}`)
  }

  updateSchedules(formdata:Schedule,id:any):Observable<any>{

    const token = localStorage.getItem('gp-token')
    const headers = new HttpHeaders({
    'Authorization' : `Bearer ${token}`
    })
    return this.http.put<any>(environment.ApiBaseUrl + `/schedules/${id}`,formdata, {headers:headers})
  }
}


