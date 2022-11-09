import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject,takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-platillo-form',
  templateUrl: './platillo-form.component.html',
  styleUrls: ['./platillo-form.component.css']
})
export class PlatilloFormComponent implements OnInit{
  titleForm:string='Crear';
  destroy$: Subject<boolean> = new Subject<boolean>();
  categoriasList:any;
  ingredientesList:any;
  restaurantesList:any;
  platilloInfo:any;
  respPlatillo:any;
  submitted = false;
  platilloForm:FormGroup;
  idPlatillo: number = 0;
  isCreate:boolean=true;

  constructor(private fb: FormBuilder, private gService: GenericService,
    private router: Router,private activeRouter: ActivatedRoute) {
      this.formularioReactive();
      this.listaCategorias();
      this.listaIngredientes();
      this.listaRestaurantes();
    
  }
  ngOnInit(): void {
    //Verificar si se envio un id por parametro para crear formulario para actualizar
    this.activeRouter.params.subscribe((params:Params)=>{
      this.idPlatillo=params['id'];
      if(this.idPlatillo!=undefined){
        this.isCreate=false;
        this.titleForm="Actualizar";
         //Obtener platillo a actualizar del API
         this.gService.get('platillo',this.idPlatillo).pipe(takeUntil(this.destroy$))
         .subscribe((data:any)=>{
          this.platilloInfo=data;
          this.platilloForm.setValue({
            id:this.platilloInfo.id,
            nombre:this.platilloInfo.nombre,
            descripcion:this.platilloInfo.descripcion,
            precio:this.platilloInfo.precio,
            publicar:this.platilloInfo.publicar,
            categorias:this.platilloInfo.categorias.map(({id}) => id),
            ingredientes:this.platilloInfo.ingredientes.map(({id}) => id),
            restaurantes:this.platilloInfo.restaurantes.map(({id}) => id)
          })
         });
      }

    });
   
       

  }
  //Crear Formulario
  formularioReactive(){
    //[null, Validators.required]
    this.platilloForm=this.fb.group({
      id:[null,null],
      nombre:[null,Validators.compose([
        Validators.required, Validators.minLength(2),Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z ]+$/),
      ])],
      descripcion:[null, Validators.required, 
        Validators.pattern(/^[a-zA-Z ]+$/)],
      precio: [null, Validators.required],
      publicar:[true, Validators.required],
      categorias:[null, Validators.required],
      ingredientes:[null, Validators.required],
      restaurantes:[null, Validators.required]
    });
   
  }
  listaCategorias() {
    this.categoriasList = null;
    this.gService
      .list('categoria')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        // console.log(data);
        this.categoriasList = data;
      });
  }
  
  listaIngredientes() {
    this.ingredientesList = null;
    this.gService
      .list('ingrediente')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        // console.log(data);
        this.ingredientesList = data;
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
    return this.platilloForm.controls[control].hasError(error);
  };
  //Crear Videojueogo
  crearPlatillo(): void {
    //Establecer submit verdadero
    this.submitted=true;
    //Verificar validación
    if(this.platilloForm.invalid){
      return;
    }
    
    //Obtener id Categorias del Formulario y Crear arreglo con {id: value}
    let gFormat:any=this.platilloForm.get('categorias').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ categorias:gFormat});
    console.log(this.platilloForm.value);

    //Obtener id Ingredientes del Formulario y Crear arreglo con {id: value}
    let gFormat2:any=this.platilloForm.get('ingredientes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ ingredientes:gFormat2});
    console.log(this.platilloForm.value);

    //Obtener id Restaurantes del Formulario y Crear arreglo con {id: value}
    let gFormat3:any=this.platilloForm.get('restaurantes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ restaurantes:gFormat3});
    console.log(this.platilloForm.value);

    //Accion API create enviando toda la informacion del formulario
    this.gService.create('platillo',this.platilloForm.value)
    .pipe(takeUntil(this.destroy$)) .subscribe((data: any) => {
      //Obtener respuesta
      this.respPlatillo=data;
      this.router.navigate(['/platilloall'],{
        queryParams: {create:'true'}
      });
    });
  
  }
  //Actualizar Platillo
  actualizarPlatillo(){
    //Establecer submit verdadero
    this.submitted=true;
    //Verificar validación
    if(this.platilloForm.invalid){
      return;
    }
    
    //Obtener id Categorias del Formulario y Crear arreglo con {id: value}
    let gFormat:any=this.platilloForm.get('categorias').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ categorias:gFormat});
    console.log(this.platilloForm.value);

    //Obtener id Ingredientes del Formulario y Crear arreglo con {id: value}
    let gFormat2:any=this.platilloForm.get('ingredientes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ ingredientes:gFormat2});
    console.log(this.platilloForm.value);

    //Obtener id Restaurantes del Formulario y Crear arreglo con {id: value}
    let gFormat3:any=this.platilloForm.get('restaurantes').value.map(x=>({['id']: x }));
    //Asignar valor al formulario 
    this.platilloForm.patchValue({ restaurantes:gFormat3});
    console.log(this.platilloForm.value);
    
    //Accion API create enviando toda la informacion del formulario
    this.gService.update('platillo',this.platilloForm.value)
    .pipe(takeUntil(this.destroy$)) .subscribe((data: any) => {
      //Obtener respuesta
      this.respPlatillo=data;
      this.router.navigate(['/platillo/all'],{
        queryParams: {update:'true'}
      });
    });
  }
  onReset() {
    this.submitted = false;
    this.platilloForm.reset();
  }
  onBack() {
    this.router.navigate(['/platillo/all']);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Desinscribirse
    this.destroy$.unsubscribe();
  }
}