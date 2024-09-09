  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { Car } from '../../models/car';
  import { FilesService } from '../../services/files.service';
import { CarService } from '../../services/car.service';
import { Router, RouterLink } from '@angular/router';

  @Component({
    selector: 'app-new-car',
    standalone: true,
    imports: [
      ReactiveFormsModule,
      RouterLink
    ],
    templateUrl: './new-car.component.html',
    styleUrl: './new-car.component.scss'
  })
  export class NewCarComponent implements OnInit{

    carForm!:FormGroup
    selectedFile:File | null = null

    constructor(
      private formBuilder:FormBuilder,
      private  carService:CarService,
      private router:Router
    ){}

    ngOnInit(): void {
      this.carForm = this.formBuilder.group({
        model:[null,[Validators.required]],
        circulationYear:[null, [Validators.required]],
        kilometers:[null,[Validators.required]],
        fuel:[null,[Validators.required]],
        gearbox:[null,[Validators.required]],
        price:[null,[Validators.required]],
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
      if (this.carForm.valid && this.selectedFile) {

        // Create FormData
        const formData = new FormData();


        // Append form fields
        Object.keys(this.carForm.value).forEach(key => {
          if (this.carForm.value[key] !== null) {
            formData.append(key, this.carForm.value[key]);
          }
        });
        // Append file
        formData.append('image', this.selectedFile, this.selectedFile.name);
  
        // Submit the form data
        this.carService.createCar(formData).subscribe(
          (response) => {
            console.log('Car submitted successfully:', response);
            this.router.navigate(['/admin/vehicules'])
          },
          (error) => {
            console.error('Car submission failed:', error);
          }
        );
      } else {
        console.error('Form is invalid or no file selected');
      }
    }


  }
