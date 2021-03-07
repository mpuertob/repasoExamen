import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Estacion } from '../core/model/Estacion';
import { Persona } from '../core/model/persona';
import { ObtenerDatosService } from '../obtener-datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public variable: Number = 4;
  public mostrar: Boolean;
  // public arrayEstaciones: Array<String> = [
  //   'Primavera',
  //   'Verano',
  //   'Otoño',
  //   'Invierno',
  // ];
  public arrayEstaciones: Array<Estacion> = [
    new Estacion('Primavera'),
    new Estacion('Verano'),
    new Estacion('Otoño'),
    new Estacion('Invierno'),
  ];
  objEstacion: Estacion = new Estacion('Venga chavales');
  array: Persona[] = [];
  constructor(
    private route: Router,
    private obtenerDatos: ObtenerDatosService
  ) {
    this.array = this.obtenerDatos.dameDatos();
  }
  obtenerNumero() {
    return this.obtenerDatos.obtenerNumero();
  }
  aumentarNumero() {
    return this.obtenerDatos.aumentarNumero();
  }
  irASaludaCliente() {
    let frigo = {
      nombre: 'Frigo Carlos',
      compartimentos: 5,
      cervezas: 5,
    };
    let extrasNavegacion: NavigationExtras = {
      state: {
        variableApasar: this.variable,
        objeto: this.objEstacion,
        uno: 'uno',
        dos: 'dos',
        frigoMio: frigo,
      },
    };
    this.route.navigate(['saluda-cliente'], extrasNavegacion);
  }
  escuchar(estacion: String) {
    let obj: Estacion = new Estacion(estacion);
    // alert('String normal: ' + estacion + ' String OBJ ' + obj.nombre);
    alert(obj.hacerAlgo());
  }
  saludar() {
    alert('Hola Carlos');
  }
  comprobar() {
    if (this.variable == 5) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  }
}
