import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroHidricoPage } from './registro-hidrico.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroHidricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroHidricoPageRoutingModule {}
