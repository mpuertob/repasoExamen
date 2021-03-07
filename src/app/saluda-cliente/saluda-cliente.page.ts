import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estacion } from '../core/model/Estacion';

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
  constructor(public route: Router, private rutaActivada: ActivatedRoute) {}

  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      let estado = this.route.getCurrentNavigation().extras.state;
      this.variableRecibida = estado.variableApasar;
      this.variableEstacion = estado.objeto;
      this.uno = estado.uno;
      this.dos = estado.dos;
      this.frigo = estado.frigoMio;
    });
    //Hecho: controlar navegacion, pages, paso de datos, eventos, ngIf, ngFor, variables en html
    //Falta: servicios, pruebas, nativos, promesas
    this.frigoMio = {
      nombre: 'Frigo Marcos',
      compartimentos: this.frigo.compartimentos + 1,
      cervezas: this.frigo.cervezas,
      leche: 2,
    };
  }
}
