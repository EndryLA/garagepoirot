import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  menuOpen = false;
  activeLink = false;
  isAuthenticated !: boolean
  token = localStorage.getItem('gp-token')
  
  constructor(
    private router:Router,
  ){}
  
  logout(){
    localStorage.removeItem('gp-token')
    window.location.reload()
    this.router.navigate([''])
  }
  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
