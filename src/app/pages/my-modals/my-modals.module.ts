import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyModalsPageRoutingModule } from './my-modals-routing.module';

import { MyModalsPage } from './my-modals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModalsPageRoutingModule
  ],
  declarations: [MyModalsPage]
})
export class MyModalsPageModule {}
