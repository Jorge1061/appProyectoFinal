import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaIndexComponent } from './mesa-index/mesa-index.component';
import { MesaDetailComponent } from './mesa-detail/mesa-detail.component';

const routes: Routes = [
  {path:'mesa', component: MesaIndexComponent},
  {path:'mesa/:id', component: MesaDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
