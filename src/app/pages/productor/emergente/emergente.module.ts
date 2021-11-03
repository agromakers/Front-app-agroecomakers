import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergentePageRoutingModule } from './emergente-routing.module';

import { EmergentePage } from './emergente.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    EmergentePageRoutingModule
  ],
  declarations: [EmergentePage]
})
export class EmergentePageModule {}
