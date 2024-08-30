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

}

