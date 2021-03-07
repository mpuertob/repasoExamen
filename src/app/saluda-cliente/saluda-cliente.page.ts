import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estacion } from '../core/model/Estacion';
import { Persona } from '../core/model/persona';
import { ObtenerDatosService } from '../share/obtener-datos.service';
import { ServicioPropioService } from './servicio-propio.service';

@Component({
  selector: 'app-saluda-cliente',
  templateUrl: './saluda-cliente.page.html',
  styleUrls: ['./saluda-cliente.page.scss'],
})
export class SaludaClientePage implements OnInit {
  variableRecibida: number;
  variableEstacion: Estacion;
  uno: String;
  dos: String;
  frigo;
  frigoMio;
  arrayPersonas: Persona[] = [];
  numero: number;
  cadenaServicioPropio: String;
  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    private obtenerDatos: ObtenerDatosService,
    private propio: ServicioPropioService
  ) {
    this.arrayPersonas = this.obtenerDatos.dameDatos();
    this.cadenaServicioPropio = this.propio.obtenerCadena();
  }
  isCarlos(nombre: String): Boolean {
    return nombre == 'Carlos';
  }
  obtenerNumero() {
    return this.obtenerDatos.obtenerNumero();
  }
  aumentarNumero() {
    return this.obtenerDatos.aumentarNumero();
  }
  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      let estado = this.route.getCurrentNavigation().extras.state;
      this.variableRecibida = estado.variableApasar;
      this.variableEstacion = estado.objeto;
      this.uno = estado.uno;
      this.dos = estado.dos;
      this.frigo = estado.frigoMio;
    });
    //Hecho: controlar navegacion, pages, paso de datos, eventos, ngIf, ngFor, variables en html, servicios
    //Falta: pruebas, nativos, mocks, promesas
    this.frigoMio = {
      nombre: 'Frigo Marcos',
      compartimentos: this.frigo.compartimentos + 1,
      cervezas: this.frigo.cervezas,
      leche: 2,
    };
  }
}
