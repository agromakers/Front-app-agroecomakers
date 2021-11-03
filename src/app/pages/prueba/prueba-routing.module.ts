import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaPage } from './prueba.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaPage
  },
  {
    path: 'prueba1',
    loadChildren: () => import('./prueba1/prueba1.module').then( m => m.Prueba1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaPageRoutingModule {}
