import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroTransportePageRoutingModule } from './registro-transporte-routing.module';

import { RegistroTransportePage } from './registro-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroTransportePageRoutingModule,
    
  ],
  declarations: [RegistroTransportePage]
})
export class RegistroTransportePageModule {}
