import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-probando-mock',
  templateUrl: './probando-mock.page.html',
  styleUrls: ['./probando-mock.page.scss'],
})
export class ProbandoMockPage implements OnInit {
  constructor(private geolocation: Geolocation) {}
  localizar() {
    this.geolocation
      .getCurrentPosition()
      .then((obj) => {
        alert('Latitude: ' + obj.coords.longitude);
        alert('Longitud: ' + obj.coords.latitude);
      })
      .catch(() => {});
  }
  ngOnInit() {}
}
