import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAutenticated: boolean | undefined;
  currentUser: any;
  constructor(private router: Router) { } 
  ngOnInit(): void {
    this.isAutenticated = true;
    let user = {
      nombre: 'Prueba',
      email: 'delizia@prueba.com'
    };
    this.currentUser = user;
  }
  irInicio() { 
    // Redireccionar a la ruta raíz 
    this.router.navigate(['/']); 
  }
}