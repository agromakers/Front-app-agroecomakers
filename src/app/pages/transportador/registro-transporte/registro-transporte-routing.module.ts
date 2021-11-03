import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroTransportePage } from './registro-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroTransportePageRoutingModule {}
