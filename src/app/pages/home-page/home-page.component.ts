import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";
import { Service } from '../../models/service';
import { CarCardComponent } from "../../components/car-card/car-card.component";
import { Car } from '../../models/car';
import { NgIf } from '@angular/common';
import { ServicesService } from '../../services/services.service';
import { CarService } from '../../services/car.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { CommentsService } from '../../services/comments.service';
import { CommentComponent } from "../../components/comment/comment.component";
import {Comment} from '../../models/comment'
import { CreateCommentComponent } from "../../cruds/create-comment/create-comment.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ServiceCardComponent,
    CarCardComponent,
    NgIf,
    RouterLink,
    ButtonComponent,
    CommentComponent,
    CreateCommentComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageComponent implements OnInit{
    
    isMobile!:Boolean
    services !: Service[]
    cars!: Car[]
    comments!: Comment[]

    constructor(
    private servicesService: ServicesService,
    private carsService: CarService,
    private commentsService: CommentsService
  ) {}
    
    ngOnInit(): void {
      
    this.servicesService.getNServices(6).subscribe(res => {
      this.services = res
    })
    
    this.carsService.getNCars(6).subscribe(data => {
      this.cars = data
    })

    this.commentsService.getNComments(4).subscribe(data => {
      this.comments = data
    })

    

    /* Reponsive width Checker*/
      
    this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  
    checkScreenSize(): void {
      this.isMobile = window.innerWidth <= 768;
    }
    
}
