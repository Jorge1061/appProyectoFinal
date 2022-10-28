import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { PedidoIndexComponent } from './pedido-index/pedido-index.component';

const routes: Routes = [
  {path:'pedido', component: PedidoIndexComponent},
  {path:'pedido/:id', component: PedidoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
