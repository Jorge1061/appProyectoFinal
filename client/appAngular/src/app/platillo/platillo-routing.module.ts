import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../share/guards/auth.guard';
import { PlatilloAllComponent } from './platillo-all/platillo-all.component';
import { PlatilloDetailComponent } from './platillo-detail/platillo-detail.component';
import { PlatilloFormComponent } from './platillo-form/platillo-form.component';
import { PlatilloIndexComponent } from './platillo-index/platillo-index.component';

const routes: Routes = [
  {
    path: 'platillo',
    component: PlatilloIndexComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER'],
    },
  },
  {
    path: 'platillo/all',
    component: PlatilloAllComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN'],
    },
  },

  {
    path: 'platillo/create',
    component: PlatilloFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER'],
    },
  },

  //Ruta solo de ejemplo detalle no se utiliza en la aplicacion
  {
    path: 'platillo/:id',
    component: PlatilloDetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER', 'MESERO'],
    },
  },

  {
    path: 'platillo/restaurante/:id',
    component: PlatilloIndexComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER', 'MESERO'],
    },
  },

  {
    path: 'platillo/update/:id',
    component: PlatilloFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER', 'MESERO'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloRoutingModule {}
