import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServiceCardComponent,
    RouterLink
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit{

  services !: Service[]

  constructor(public servicesService:ServicesService){}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe(res => {
      this.services = res
    })
  }
}
