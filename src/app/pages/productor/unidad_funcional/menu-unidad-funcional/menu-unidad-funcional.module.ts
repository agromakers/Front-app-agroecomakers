import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuUnidadFuncionalPageRoutingModule } from './menu-unidad-funcional-routing.module';

import { MenuUnidadFuncionalPage } from './menu-unidad-funcional.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    MenuUnidadFuncionalPageRoutingModule
  ],
  declarations: [MenuUnidadFuncionalPage]
})
export class MenuUnidadFuncionalPageModule {}
