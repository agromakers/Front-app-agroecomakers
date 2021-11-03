import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FincaPageRoutingModule } from './finca-routing.module';

import { FincaPage } from './finca.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    FincaPageRoutingModule,
    TranslateModule
  ],
  declarations: [FincaPage]
})
export class FincaPageModule {}
