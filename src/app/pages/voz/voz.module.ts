import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VozPageRoutingModule } from './voz-routing.module';

import { VozPage } from './voz.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VozPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [VozPage]
})
export class VozPageModule {}
