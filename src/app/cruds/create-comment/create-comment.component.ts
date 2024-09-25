import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-create-comment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.scss'
})
export class CreateCommentComponent implements OnInit{

  commentForm!: FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private commentsService:CommentsService
  ){}

  ngOnInit(): void {
      this.commentForm = this.formBuilder.group({
        name:[null],
        note:[null],
        comment:[null]
      })
      console.log('ui')
  }

  submitForm() {
    console.log(this.commentForm.value)
    this.commentsService.createComment(this.commentForm.value).subscribe()
  }

}
