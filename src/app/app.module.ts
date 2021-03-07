import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ObtenerDatosService } from './share/obtener-datos.service';
import { GeolocationMock } from 'mocks/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Geolocation, useClass: GeolocationMock }, //Esta linea seria para la rama del mockPc
    // Geolocation, //Esta linea seria para la rama del nativo
    ObtenerDatosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
