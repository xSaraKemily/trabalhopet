import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'meus-pets',
    loadChildren: () => import('./meus-pets/meus-pets.module').then( m => m.MeusPetsPageModule)
  },
  {
    path: 'cuidadores',
    loadChildren: () => import('./cuidadores/cuidadores.module').then( m => m.CuidadoresPageModule)
  },
  {
    path: 'contratos/:cuidador',
    loadChildren: () => import('./contratos/contratos.module').then( m => m.ContratosPageModule)
  },
  {
    path: 'contratos',
    loadChildren: () => import('./contratos/contratos.module').then( m => m.ContratosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
