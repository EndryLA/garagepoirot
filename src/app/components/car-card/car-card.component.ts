import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent{

  @Input() car!: Car
  apiBaseUrl = environment.ApiBaseUrl

}
