import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Service } from '../../models/service';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-services-crud',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ConfirmationModalComponent
  ],
  templateUrl: './services-crud.component.html',
  styleUrl: './services-crud.component.scss'
})
export class ServicesCrudComponent implements OnInit {

  openModal:boolean = false
  services !: Service[]
  id!: number


  constructor(
    private serviceServices:ServicesService,
    private router:Router
  ){}

  ngOnInit(): void {
       this.serviceServices.getServices().subscribe(data => {
        this.services = data
      })
  }

  setId(id:any){
    this.id = id
    this.openModal = !this.openModal
  }
}
