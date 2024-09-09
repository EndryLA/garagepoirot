import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true, 
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {

  @Input() id!:any
  @Input() entity!:string
  @Input() display!: boolean
  
  constructor(
    private http:HttpClient,
    private router:Router
  
  ){}

  confirm() {
    const token = localStorage.getItem('gp-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const apiUrl = `${environment.ApiBaseUrl}/${this.entity}/${this.id}`;
    console.log(apiUrl);

    this.http.delete<any>(apiUrl, { headers: headers }).subscribe({
      next: (response) => {
        this.router.navigate([`/admin/${this.entity}`])
      },
      error: (error) => {
        return error
      }
    });
  }
  
  infirm() {
    this.display = false
  }

}


