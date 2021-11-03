import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergentePage } from './emergente.page';

const routes: Routes = [
  {
    path: '',
    component: EmergentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergentePageRoutingModule {}
