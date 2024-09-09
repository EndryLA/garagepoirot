import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Service } from '../../models/service';

@Component({
  selector: 'app-update-service',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.scss'
})
export class UpdateServiceComponent implements OnInit{

  serviceForm !: FormGroup
  serviceData !: Service
  id !: any

  constructor(
    private servicesService:ServicesService,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
  ){}
  
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      this.servicesService.getService(this.id).subscribe(response => {
        this.serviceData = response
        console.log('service data'+ this.serviceData)

        this.serviceForm = this.formBuilder.group({
          title:[this.serviceData.title,[Validators.required]],
          description:[this.serviceData.description,[Validators.required]]
        })
      })  
  }

  sumbitForm(){
    if (this.serviceForm.valid) {

      this.servicesService.updateService(this.serviceForm.value,this.id).subscribe(response => {
        this.router.navigate(['/admin/services'])
      })
    }
  }

  deleteService(id:any) {
    this.servicesService.deleteService(id).subscribe(response => console.log(response))
  }

}
