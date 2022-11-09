import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject,takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-mesa-form',
  templateUrl: './mesa-form.component.html',
  styleUrls: ['./mesa-form.component.css']
})
export class MesaFormComponent implements OnInit{
  titleForm:string='Crear';
  destroy$: Subject<boolean> = new Subject<boolean>();
  estadosList:any;
  restaurantesList:any;
  mesaInfo:any;
  respMesa:any;
  submitted = false;
  mesaForm:FormGroup;
  idMesa: number = 0;
  isCreate:boolean=true;

  constructor(private fb: FormBuilder, private gService: GenericService,
    private router: Router,private activeRouter: ActivatedRoute) {
      this.formularioReactive();
      this.listaEstados();
      this.listaRestaurantes();
    
  }
  ngOnInit(): void {
    //Verificar si se envio un id por parametro para crear formulario para actualizar
    this.activeRouter.params.subscribe((params:Params)=>{
      this.idMesa=params['id'];
      if(this.idMesa!=undefined){
        this.isCreate=false;
        this.titleForm="Actualizar";
         //Obtener mesa a actualizar del API
         this.gService.get('mesa',this.idMesa).pipe(takeUntil(this.destroy$))
         .subscribe((data:any)=>{
          this.mesaInfo=data;
          this.mesaForm.setValue({
            id:this.mesaInfo.id,
            codigo:this.mesaInfo.codigo,
            capacidad:this.mesaInfo.capacidad,
            estados:this.mesaInfo.estados.map(({id}) => id),
            restaurantes:this.mesaInfo.restaurante.map(({id}) => id)
          })
         });
      }

    });
   
       

  }
  //Crear Formulario
  formularioReactive(){
    //[null, Validators.required]
    this.mesaForm=this.fb.group({
      id:[null,null],
      codigo:[null,Validators.compose([
        Validators.required, Validators.minLength(2),Validators.maxLength(20)
      ])],
      capacidad:[null, Validators.required],
      estados:[null, Validators.required],
      restaurantes:[null, Validators.required]
    });
   
  }
  listaEstados() {
    this.estadosList = null;
    this.gService
      .list('estado')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        // console.log(data);
        this.estadosList = data;
      });
  }
  
  
  listaRestaurantes() {
    this.restaurantesList = null;
    this.gService
      .list('restaurante')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        // console.log(data);
        this.restaurantesList = data;
      });
  }
 
  public errorHandling = (control: string, error: string) => {
    return this.mesaForm.controls[control].hasError(error);
  };
  //Crear Videojueogo
  crearMesa(): void {
    //Establecer submit verdadero
    this.submitted=true;
    //Verificar validación
    if(this.mesaForm.invalid){
      return;
    }
    
    //Obtener id Mesas del Formulario y Crear arreglo con {id: value}
    let gFormat:any=this.mesaForm.get('estados').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.mesaForm.patchValue({ estados:gFormat});
    console.log(this.mesaForm.value);

    //Obtener id Restaurantes del Formulario y Crear arreglo con {id: value}
    let gFormat3:any=this.mesaForm.get('restaurantes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.mesaForm.patchValue({ restaurantes:gFormat3});
    console.log(this.mesaForm.value);

    //Accion API create enviando toda la informacion del formulario
    this.gService.create('mesa',this.mesaForm.value)
    .pipe(takeUntil(this.destroy$)) .subscribe((data: any) => {
      //Obtener respuesta
      this.respMesa=data;
      this.router.navigate(['/mesa/all'],{
        queryParams: {create:'true'}
      });
    });
  
  }
  //Actualizar Mesa
  actualizarMesa(){
    //Establecer submit verdadero
    this.submitted=true;
    //Verificar validación
    if(this.mesaForm.invalid){
      return;
    }
    
    //Obtener id Mesas del Formulario y Crear arreglo con {id: value}
    let gFormat:any=this.mesaForm.get('estados').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.mesaForm.patchValue({ estados:gFormat});
    console.log(this.mesaForm.value);

    //Obtener id Restaurantes del Formulario y Crear arreglo con {id: value}
    let gFormat3:any=this.mesaForm.get('restaurantes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.mesaForm.patchValue({ restaurantes:gFormat3});
    console.log(this.mesaForm.value);
    
    //Accion API create enviando toda la informacion del formulario
    this.gService.update('mesa',this.mesaForm.value)
    .pipe(takeUntil(this.destroy$)) .subscribe((data: any) => {
      //Obtener respuesta
      this.respMesa=data;
      this.router.navigate(['/mesa/all'],{
        queryParams: {update:'true'}
      });
    });
  }
  onReset() {
    this.submitted = false;
    this.mesaForm.reset();
  }
  onBack() {
    this.router.navigate(['/mesa/all']);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Desinscribirse
    this.destroy$.unsubscribe();
  }
}
