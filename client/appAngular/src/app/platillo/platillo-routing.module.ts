import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatilloIndexComponent } from './platillo-index/platillo-index.component';
import { PlatilloDetailComponent } from './platillo-detail/platillo-detail.component';

const routes: Routes = [
  {path:'platillo', component: PlatilloIndexComponent},
  {path:'platillo/:id', component: PlatilloDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatilloRoutingModule { }
