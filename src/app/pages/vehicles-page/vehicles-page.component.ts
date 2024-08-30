import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicles-page',
  standalone: true,
  imports: [
    CarCardComponent,
    RouterLink,
    
  ],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss'
})
export class VehiclesPageComponent implements OnInit {

  cars !: any

  constructor(private carsService:CarService){}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(res => {
      console.log(res)
      this.cars= res;
    })
  }


}
