import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFincaPage } from './registro-finca.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFincaPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFincaPageRoutingModule { }
