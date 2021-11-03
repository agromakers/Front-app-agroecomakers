import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { IdiomaComponent } from './idioma/idioma.component';
import { LogoBodyComponent } from './logo-body/logo-body.component';
import { HeaderBasicoComponent } from './header-basico/header-basico.component';
import { FotterComponent } from './fotter/fotter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IdiomaComponent,
    LogoBodyComponent,
    HeaderBasicoComponent,
    FotterComponent 
    ],
  exports:[
    HeaderComponent,
    IdiomaComponent,
    LogoBodyComponent,
    HeaderBasicoComponent,
    FotterComponent 
    ],
  imports: [
    CommonModule, 
    IonicModule,
  ]
})
export class ComponentsModule { }
