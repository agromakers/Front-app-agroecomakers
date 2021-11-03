import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TransportadorPageRoutingModule } from './transportador-routing.module';

import { TransportadorPage } from './transportador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportadorPageRoutingModule,    
    ComponentsModule,
    TranslateModule,
  ],
  declarations: [TransportadorPage]
})
export class TransportadorPageModule {}
