import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent{

  @Input() service!:Service

}
