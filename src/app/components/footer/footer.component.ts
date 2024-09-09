import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../../services/schedules.service';
import { NgFor } from '@angular/common';
import { Schedule } from '../../models/schedule';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  daysArray = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
  scheduleArray :Schedule[] = []

  constructor(private schedulesService:SchedulesService){}

  ngOnInit(): void {
    
    this.schedulesService.getSchedules().subscribe(data => {
      this.scheduleArray = data
    })
  }


}
