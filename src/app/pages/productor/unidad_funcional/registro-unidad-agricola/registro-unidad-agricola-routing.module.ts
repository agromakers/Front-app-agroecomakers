import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUnidadAgricolaPage } from './registro-unidad-agricola.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUnidadAgricolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUnidadAgricolaPageRoutingModule {}
