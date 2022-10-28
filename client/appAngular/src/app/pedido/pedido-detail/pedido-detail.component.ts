import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject,takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'pedido-detail',
  templateUrl: './pedido-detail.component.html',
  styleUrls: ['./pedido-detail.component.css']
})
export class PedidoDetailComponent implements OnInit{
  isAutenticated: boolean | undefined;
  destroy$: Subject<boolean> = new Subject<boolean>();
  pedidoInfo:any;
  idPedido: number = 0;

  constructor(private fb: FormBuilder, private gService: GenericService,
    private router: Router,private activeRouter: ActivatedRoute) {
  }
  ngOnInit(): void {

    //Verificar si se envio un id por parametro para crear formulario para actualizar
    this.activeRouter.params.subscribe((params:Params)=>{
      
      this.idPedido=params['id'];
      if(this.idPedido!=undefined && this.isAutenticated==true){
         //Obtener Pedido a actualizar del API
         this.gService.get('pedido',this.idPedido).pipe(takeUntil(this.destroy$))
         .subscribe((data:any)=>{
          this.pedidoInfo=data;
          
         });
      }
    });
  }
  onBack() {
    this.router.navigate(['/pedido']);
  }
  esPlatillo(){

  }

}
