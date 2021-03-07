import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbandoMockPageRoutingModule } from './probando-mock-routing.module';

import { ProbandoMockPage } from './probando-mock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbandoMockPageRoutingModule
  ],
  declarations: [ProbandoMockPage]
})
export class ProbandoMockPageModule {}
