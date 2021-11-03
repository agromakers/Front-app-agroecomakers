import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEntregaPageRoutingModule } from './registro-entrega-routing.module';

import { RegistroEntregaPage } from './registro-entrega.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    RegistroEntregaPageRoutingModule
  ],
  declarations: [RegistroEntregaPage]
})
export class RegistroEntregaPageModule {}
