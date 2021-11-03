import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuUnidadFuncionalPage } from './menu-unidad-funcional.page';

const routes: Routes = [
  {
    path: '',
    component: MenuUnidadFuncionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuUnidadFuncionalPageRoutingModule {}
