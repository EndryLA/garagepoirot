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
  loading=false;

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
  }

  submitForm() {
    this.loading=true;
    this.commentsService.createComment(this.commentForm.value).subscribe({
      next:() => {
        alert("Votre commentaire a bien été enregistré")
        this.commentForm.reset()
        this.loading=true;
      },
      error: () => {
        alert("Une erreur est survenue")
        this.loading=false;
      }
    })
  }

}
