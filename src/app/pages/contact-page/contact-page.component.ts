import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { MailingService } from '../../services/mailing.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit{

    contactForm !: FormGroup
    notification !: string
    showDialog = false

    constructor(
      private formBuilder:FormBuilder,
      private mailingService:MailingService
    ) {}

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
          lastname:[null,[Validators.required]],
          firstname:[null,[Validators.required]],
          email:[null,],
          message:[null,],
        })
    }

    toggleDialog() {
        this.showDialog = !this.showDialog
    }

    submit() {
      if (this.contactForm.valid) {
        this.mailingService.sendMail(this.contactForm.value).subscribe({
          next: 
          response => {
            console.log('Mail sent successfully', response) 
            this.notification = response.message
            this.showDialog = !this.showDialog
          
          },
        
          error: error => {
            console.error('Error sending mail', error)
            this.notification = error.error.errors[0].msg
            this.showDialog = !this.showDialog
          }
        });
      }
    }


}
