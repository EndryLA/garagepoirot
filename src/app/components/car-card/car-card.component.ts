import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    DecimalPipe
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent implements OnInit{

  car!: Car

  ngOnInit(): void {
    this.car = {
      id:1,
      price:8900,
      circulationYear:2009,
      kilometers:321231,
      image:'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
      fuel:'Diesel',
      model:'Citroen C3',
      gearbox:'essence'
    }
  }

}
