import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportadorPage } from './transportador.page';

const routes: Routes = [
  {
    path: '',
    component: TransportadorPage
  },
  {
    path: 'registro-transporte',
    loadChildren: () => import('./registro-transporte/registro-transporte.module').then( m => m.RegistroTransportePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportadorPageRoutingModule {}
