import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludaClientePageRoutingModule } from './saluda-cliente-routing.module';

import { SaludaClientePage } from './saluda-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludaClientePageRoutingModule
  ],
  declarations: [SaludaClientePage]
})
export class SaludaClientePageModule {}
