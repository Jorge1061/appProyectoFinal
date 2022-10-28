import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject,takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'platillo-detail',
  templateUrl: './platillo-detail.component.html',
  styleUrls: ['./platillo-detail.component.css']
})
export class PlatilloDetailComponent implements OnInit{

  destroy$: Subject<boolean> = new Subject<boolean>();
  platilloInfo:any;
  idPlatillo: number = 0;

  constructor(private fb: FormBuilder, private gService: GenericService,
    private router: Router,private activeRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    //Verificar si se envio un id por parametro para crear formulario para actualizar
    this.activeRouter.params.subscribe((params:Params)=>{
      this.idPlatillo=params['id'];
      if(this.idPlatillo!=undefined){
         //Obtener Platillo a actualizar del API
         this.gService.get('platillo',this.idPlatillo).pipe(takeUntil(this.destroy$))
         .subscribe((data:any)=>{
          this.platilloInfo=data;
          
         });
      }
    });
  }
  onBack() {
    this.router.navigate(['/platillo']);
  }

}
