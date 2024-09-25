import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Service } from '../../models/service';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-crud',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './services-crud.component.html',
  styleUrl: './services-crud.component.scss'
})
export class ServicesCrudComponent implements OnInit {

  services !: Service[]

  constructor(
    private serviceServices:ServicesService,
    private router:Router
  ){}

  ngOnInit(): void {
       this.serviceServices.getServices().subscribe(data => {
        this.services = data
      })
  }

  deleteService(id:any) {
    this.serviceServices.deleteService(id).subscribe(response => {
      window.location.reload();

    }
  )
  }
}
