import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaAllComponent } from './mesa-all/mesa-all.component';
import { MesaDetailComponent } from './mesa-detail/mesa-detail.component';
import { MesaFormComponent } from './mesa-form/mesa-form.component';
import { MesaIndexComponent } from './mesa-index/mesa-index.component';

const routes: Routes = [
  {path:'mesa', component: MesaIndexComponent},
    
  {path:'mesa/all', component: MesaAllComponent},

  {path:'mesa/create', component: MesaFormComponent},

  //Ruta solo de ejemplo detalle no se utiliza en la aplicacion
  {path:'mesa/:id', component: MesaDetailComponent},

  {path:'mesa/update/:id', component: MesaFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
