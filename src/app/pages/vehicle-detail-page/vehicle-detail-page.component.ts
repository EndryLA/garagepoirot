import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { environment } from '../../../environments/environment';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-vehicle-detail-page',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './vehicle-detail-page.component.html',
  styleUrl: './vehicle-detail-page.component.scss'
})
export class VehicleDetailPageComponent implements OnInit {

  car!: Car
  

  constructor(
    private carService: CarService,
    private route:ActivatedRoute
  ){}

  apiBaseUrl = environment.ApiBaseUrl

  ngOnInit() {
    const carId = +this.route.snapshot.params['id'];
    this.carService.getCar(carId).subscribe(data => {
      this.car = data
      console.log(this.car)
    })
  }
}
