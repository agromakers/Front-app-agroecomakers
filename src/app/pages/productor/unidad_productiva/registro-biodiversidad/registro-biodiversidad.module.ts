import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroBiodiversidadPageRoutingModule } from './registro-biodiversidad-routing.module';

import { RegistroBiodiversidadPage } from './registro-biodiversidad.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    RegistroBiodiversidadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroBiodiversidadPage]
})
export class RegistroBiodiversidadPageModule {}
