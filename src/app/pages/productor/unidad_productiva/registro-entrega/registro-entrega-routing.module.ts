import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroEntregaPage } from './registro-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroEntregaPageRoutingModule {}
