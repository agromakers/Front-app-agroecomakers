import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductorPage } from './productor.page';

const routes: Routes = [
  {
    path: '',
    component: ProductorPage,
    /* children:[ 
      {
        path:'productor',
        loadChildren: () => import('../productor/productor.module').then( m => m.ProductorPageModule)
      },   
      {
        path:'mapa',
        loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
      }
    ] */
  },
  {
    path: 'registro-finca',
    loadChildren: () => import('./unidad_productiva/registro-finca/registro-finca.module').then( m => m.RegistroFincaPageModule)
  },
  
  {
    path: 'registro-trabajadores',
    loadChildren: () => import('./unidad_productiva/registro-trabajadores/registro-trabajadores.module').then( m => m.RegistroTrabajadoresPageModule)
  },
  /* {
    path: 'emergente',
    loadChildren: () => import('./emergente/emergente.module').then( m => m.EmergentePageModule)
  }, */
  {
    path: 'registro-hidrico',
    loadChildren: () => import('./unidad_productiva/registro-hidrico/registro-hidrico.module').then( m => m.RegistroHidricoPageModule)
  },
  {
    path: 'registro-entrega',
    loadChildren: () => import('./unidad_productiva/registro-entrega/registro-entrega.module').then( m => m.RegistroEntregaPageModule)
  },
  {
    path: 'registro-biodiversidad',
    loadChildren: () => import('./unidad_productiva/registro-biodiversidad/registro-biodiversidad.module').then( m => m.RegistroBiodiversidadPageModule)
  },
  {
    path: 'menu-unidad-funcional',
    loadChildren: () => import('./unidad_funcional/menu-unidad-funcional/menu-unidad-funcional.module').then( m => m.MenuUnidadFuncionalPageModule)
  },
  {
    path: 'registro-unidad-agricola',
    loadChildren: () => import('./unidad_funcional/registro-unidad-agricola/registro-unidad-agricola.module').then( m => m.RegistroUnidadAgricolaPageModule)
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductorPageRoutingModule {}
