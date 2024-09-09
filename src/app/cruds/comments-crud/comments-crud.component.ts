import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comments-crud',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './comments-crud.component.html',
  styleUrl: './comments-crud.component.scss'
})
export class CommentsCrudComponent implements OnInit {

  comments!: Comment[]

  constructor(
    private commentsService:CommentsService
  ){}

  ngOnInit(): void {
      this.commentsService.getComments().subscribe(response => {
        this.comments = response
      })
  }


}
