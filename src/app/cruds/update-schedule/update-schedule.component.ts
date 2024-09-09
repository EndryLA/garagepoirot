import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SchedulesService } from '../../services/schedules.service';
import { Schedule } from '../../models/schedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-schedule',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-schedule.component.html',
  styleUrl: './update-schedule.component.scss'
})
export class UpdateScheduleComponent implements OnInit{
  
  scheduleForm!: FormGroup
  scheduleData!: Schedule[]

  constructor(
    private schedulesServices:SchedulesService,
    private formBuilder: FormBuilder,
    private router:Router
  ){}

  ngOnInit(): void {
      this.schedulesServices.getSchedules().subscribe(response => {
        console.log(response)
        this.scheduleData = response
        

        this.scheduleForm = this.formBuilder.group({
          lundi:[response[0].content,[Validators.required]],
          mardi:[response[1].content,[Validators.required]],
          mercredi:[response[2].content,[Validators.required]],
          jeudi:[response[3].content,[Validators.required]],
          vendredi:[response[4].content,[Validators.required]],
          samedi:[response[5].content,[Validators.required]],
          dimanche:[response[6].content,[Validators.required]],
        })
      })
  }  

  submitForm() {
    if (this.scheduleForm.valid) {
      const formValues = this.scheduleForm.value;
  
      const updatedSchedules = this.scheduleData.map((schedule, index) => {

        const day = Object.keys(formValues)[index];
        const content = formValues[day];
  
        return {
          id: schedule.id,
          day: day,
          content: content
        };
      });
  
      console.log('Updated schedules:', updatedSchedules);
  
      updatedSchedules.forEach(schedule => {
        this.schedulesServices.updateSchedules(schedule, schedule.id).subscribe(
          response => {
            this.router.navigate(['/admin'])
          },
          error => {
            console.error(`Error updating schedule for ${schedule.day}:`, error);
          }
        );
      });
    }


  }


}
