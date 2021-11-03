import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroBiodiversidadPage } from './registro-biodiversidad.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBiodiversidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBiodiversidadPageRoutingModule {}
