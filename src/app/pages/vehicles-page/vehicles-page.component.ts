import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles-page',
  standalone: true,
  imports: [
    CarCardComponent,
    RouterLink,
    ReactiveFormsModule
    
  ],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss'
})
export class VehiclesPageComponent implements OnInit {

  cars !: Car[]



  constructor(private carsService:CarService){}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(res => {
      this.cars= res;
    })
  }




}
