import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Car } from '../../models/car';

@Component({
  selector: 'app-update-car',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.scss'
})
export class UpdateCarComponent {

  carForm! :FormGroup
  selectedFile:File | null = null
  id !: any
  carData!: Car

    constructor(
      private formBuilder:FormBuilder,
      private carService:CarService,
      private route:ActivatedRoute,
      private router:Router
    ){}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')

      this.carService.getCar(this.id).subscribe(response => {
        this.carData = response

        this.carForm = this.formBuilder.group({
          
          model:[this.carData.model,[Validators.required]],
          circulationYear:[this.carData.circulationYear, [Validators.required]],
          kilometers:[this.carData.kilometers,[Validators.required]],
          fuel:[this.carData.fuel,[Validators.required]],
          gearbox:[this.carData.gearbox,[Validators.required]],
          price:[this.carData.price,[Validators.required]],
        })
      })

    }

    onFileSelected(event: any) :void {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.carForm.patchValue({ image: this.selectedFile });
      }
    }

    submitForm(): void {
      if (this.carForm.valid) {
        // Create FormData
        const formData = new FormData();
  
        // Append form fields
        Object.keys(this.carForm.value).forEach(key => {
          if (this.carForm.value[key] !== null) {
            formData.append(key, this.carForm.value[key]);
          }
        });
  
        // Append the file if a new one is selected
        if (this.selectedFile) {
          formData.append('image', this.selectedFile, this.selectedFile.name);
        }
  
        // Submit the form data
        this.carService.updateCar(formData, this.id).subscribe(
          response => {
            this.router.navigate(['/admin/vehicules'])

          },
          error => {
            console.error('Car update failed:', error);
          }
        );
      } else {
        console.error('Form is invalid or no file selected');
      }
    }
}
