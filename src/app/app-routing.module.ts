import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'saluda-cliente',
    loadChildren: () =>
      import('./saluda-cliente/saluda-cliente.module').then(
        (m) => m.SaludaClientePageModule
      ),
  },
  {
    path: 'probando-mock',
    loadChildren: () => import('./probando-mock/probando-mock.module').then( m => m.ProbandoMockPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
