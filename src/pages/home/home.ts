import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SesionPage } from '../sesion/sesion'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  iniciarSesion() {
    this.navCtrl.push(SesionPage);

  }
}
