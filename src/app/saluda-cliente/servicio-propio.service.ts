import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioPropioService {
  cadena: String = 'Servicio propio de saluda cliente';
  constructor() {}
  obtenerCadena() {
    return this.cadena;
  }
}
