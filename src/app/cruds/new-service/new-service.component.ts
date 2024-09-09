import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-service',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-service.component.html',
  styleUrl: './new-service.component.scss'
})
export class NewServiceComponent implements OnInit{

  serviceForm !: FormGroup

  constructor(
    private servicesService:ServicesService,
    private formBuilder:FormBuilder,
    private router:Router
  ){}

  ngOnInit(): void {

      this.serviceForm = this.formBuilder.group({
        title:[null,[Validators.required]],
        description:[null,[Validators.required]]
      
    })  
}
  
  sumbitForm(){
    if (this.serviceForm.valid) {

      this.servicesService.createService(this.serviceForm.value).subscribe(response => {
        this.router.navigateByUrl('/admin/services')
      })
    }
  }

}
