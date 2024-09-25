import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { filter, map, Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = environment.ApiBaseUrl

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.ApiBaseUrl + '/comments')
  }

  createComment(formData:Comment): Observable<any>{
    return this.http.post(this.apiBaseUrl + '/comments',formData)
  }

  getNComments(n: number):Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiBaseUrl + '/comments').pipe(
      filter((comment,index) => comment[index].note >= 4),
      map(comments => comments.slice(0,n || comments.length))
      
    )
  }

}

