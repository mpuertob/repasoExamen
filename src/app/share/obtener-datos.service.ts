import { Injectable } from '@angular/core';
import { Persona } from '../core/model/persona';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosService {
  public array: Persona[] = [];
  public numero: number = 5;

  constructor() {}
  private crearDatos() {
    let personaUno = new Persona('Adil', 25);
    let personaDos = new Persona('Carlos', 18);
    let personaTres = new Persona('Miguel', 64);
    let personaCuatro = new Persona('Marcos', 21);
    personaCuatro.casado = true;
    personaUno.casado = true;

    this.array.push(personaUno);
    this.array.push(personaDos);
    this.array.push(personaTres);
    this.array.push(personaCuatro);
  }
  dameDatos() {
    this.crearDatos();
    return this.array;
  }
  obtenerNumero() {
    return this.numero;
  }
  aumentarNumero() {
    this.numero++;
  }
}
