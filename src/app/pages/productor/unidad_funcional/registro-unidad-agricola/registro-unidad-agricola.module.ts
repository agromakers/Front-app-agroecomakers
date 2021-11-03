import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUnidadAgricolaPageRoutingModule } from './registro-unidad-agricola-routing.module';

import { RegistroUnidadAgricolaPage } from './registro-unidad-agricola.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroUnidadAgricolaPageRoutingModule,
    ComponentsModule,
    TranslateModule,
  ],
  declarations: [RegistroUnidadAgricolaPage]
})
export class RegistroUnidadAgricolaPageModule {}
