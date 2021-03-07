import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbandoMockPage } from './probando-mock.page';

const routes: Routes = [
  {
    path: '',
    component: ProbandoMockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbandoMockPageRoutingModule {}
