import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable,pipe,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  file!:File

  constructor(
    private http:HttpClient
  ) { }


  uploadImage(file :File):Observable<any>{
    const formData = new FormData()

    formData.append('image',file,file.name)

    const token = localStorage.getItem('gp-token')

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${  token}`
    })

    return this.http.post(environment.ApiBaseUrl + '/images/upload',formData, {headers})

  }

}
