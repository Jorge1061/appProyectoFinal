import { Component } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService, TipoMessage } from 'src/app/share/notification.service';
import { AuthenticationService } from 'src/app/share/authentication.service';

@Component({
  selector: 'mesa-index',
  templateUrl: './mesa-index.component.html',
  styleUrls: ['./mesa-index.component.css']
})
export class MesaIndexComponent {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  currentUser: any;
  isAutenticated: any;
  id:any;
  datos2: any;
  listRestaurante: any;

  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private breakpointObserver: BreakpointObserver,
    private gService: GenericService,
    private noti: NotificacionService,
  ) {
    
    //Valores de prueba
 /*  this.isAutenticated=true;
  let user = { 
    name:"Tom", 
    email:"tHanks@prueba.com" 
 }; 
  this.currentUser=user; */
  //Subscripción a la información del usuario actual
  this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  
  //Subscripción al booleano que indica si esta autenticado
  this.authService.isAuthenticated.subscribe(
    (valor) => (this.isAutenticated = valor)
  );
    this.listaMesas(); this.listaRestaurante();
  }

  listaMesas() {
    this.gService
      .list('mesa/')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        console.log(data);
        this.datos = data;
      });
  }

  listaRestaurante() {
    this.gService
      .list('restaurante/')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
       // console.log(data);
        this.listRestaurante = data;
      });
  }

  obtenerByRest(id:any) {
    this.gService
    .get('mesa/rest',id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
       // console.log(data);
        this.datos2 = data;
      });
  }


  detalleMesa(id: number) {
    this.router.navigate(['/mesa', id], {
      relativeTo: this.route,
    });
  }
  onBack() {
    this.router.navigate(['/']);
  }
}