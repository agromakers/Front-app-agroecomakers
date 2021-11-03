import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFincaPageRoutingModule } from './registro-finca-routing.module';

import { RegistroFincaPage } from './registro-finca.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { MyModalsPage } from '../../../my-modals/my-modals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    RegistroFincaPageRoutingModule,
    
  ],
  declarations: [
    RegistroFincaPage,
    MyModalsPage],
  entryComponents:[
    MyModalsPage,
  ]
})
export class RegistroFincaPageModule {}
