import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent{

  @Input() comment!:Comment
   


}
