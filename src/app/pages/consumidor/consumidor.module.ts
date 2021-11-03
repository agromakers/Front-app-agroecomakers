import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ConsumidorPageRoutingModule } from './consumidor-routing.module';

import { ConsumidorPage } from './consumidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ConsumidorPageRoutingModule,
    TranslateModule
  ],
  declarations: [ConsumidorPage]
})
export class ConsumidorPageModule {}
