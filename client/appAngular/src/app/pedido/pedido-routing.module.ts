import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../share/guards/auth.guard';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { PedidoIndexComponent } from './pedido-index/pedido-index.component';

const routes: Routes = [
  {path:'pedido', component: PedidoIndexComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ADMIN'],
  },},
  {path:'pedido/:id', component: PedidoDetailComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ADMIN'],
  },},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
