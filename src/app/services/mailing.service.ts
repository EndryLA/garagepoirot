import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(
    private http:HttpClient
  ) { }

  sendMail(contactForm: any):Observable<any>{
    return this.http.post(environment.ApiBaseUrl + '/mail/send', contactForm)
  }
}
