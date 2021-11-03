import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroTrabajadoresPageRoutingModule } from './registro-trabajadores-routing.module';

import { RegistroTrabajadoresPage } from './registro-trabajadores.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    ComponentsModule,
    RegistroTrabajadoresPageRoutingModule
  ],
  declarations: [RegistroTrabajadoresPage]
})
export class RegistroTrabajadoresPageModule {}
