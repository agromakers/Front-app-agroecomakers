import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'productor',
    loadChildren: () => import('./pages/productor/productor.module').then( m => m.ProductorPageModule)
  },
  {
    path: 'transportador',
    loadChildren: () => import('./pages/transportador/transportador.module').then( m => m.TransportadorPageModule)
  },   
  /* {
    path: 'productor/registro-finca/',
    loadChildren: () => import('./pages/productor/registro-finca/registro-finca.module').then(m => m.RegistroFincaPageModule)
  },  */
  {
    path: 'transportador/registro-transporte/',
    loadChildren: () => import('./pages/transportador/registro-transporte/registro-transporte.module').then(m => m.RegistroTransportePageModule)
  }, 
  // {
  //   path: 'productor/registro-finca/rfpage2/',
  //   loadChildren: () => import('./pages/productor/registro-finca/rfpage2/rfpage2.module').then(m => m.RFpage2PageModule)
  // },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
 /*  {
    path: 'my-modals',
    loadChildren: () => import('./pages/my-modals/my-modals.module').then( m => m.MyModalsPageModule)
  }, */


];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
