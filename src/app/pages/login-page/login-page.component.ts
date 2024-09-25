import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  userData!: FormGroup

  constructor(
    private formbuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.userData = this.formbuilder.group({
      username:[null,[Validators.email, Validators.required]],
      password:[null,[Validators.required,]]
    })
  }

  loginUser() {
    if (this.userData && this.userData.valid) {
      this.authenticationService.authenticate(this.userData.value).subscribe()
     
    } else {
      console.log("donnés non valides")
    }
  }

}
