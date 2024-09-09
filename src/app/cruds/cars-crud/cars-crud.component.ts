import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { RouterLink } from '@angular/router';
import { ConfirmationModalComponent } from "../../components/confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-cars-crud',
  standalone: true,
  imports: [
    RouterLink,
    ConfirmationModalComponent
],
  templateUrl: './cars-crud.component.html',
  styleUrl: './cars-crud.component.scss'
})
export class CarsCrudComponent implements OnInit{

  cars!:Car[]
  openModal:boolean = false
  id!: number

  constructor(
    private carsService:CarService,
  ){}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => {
      this.cars = data
    })
  }
 
  setId(id:any){
    this.id = id
    this.openModal = !this.openModal
    console.log(this.id)
  }


}
