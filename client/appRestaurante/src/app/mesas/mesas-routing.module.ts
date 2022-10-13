import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesasIndexComponent } from './mesas-index/mesas-index.component';

const routes: Routes = [
  {path:'mesas', component: MesasIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
