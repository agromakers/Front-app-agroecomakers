import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroTrabajadoresPage } from './registro-trabajadores.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroTrabajadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroTrabajadoresPageRoutingModule {}
