import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reservation',
  templateUrl: 'add-reservation.html',
})
export class AddReservationPage {
  fecha: string;
  hora: string;
  doctor: string;
  usuario: string;
  centro: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFirestore: AngularFirestore, public alertCtrl: AlertController) {
    this.usuario = navParams.get('user');
    let fechaHoy = new Date();
    this.fecha = fechaHoy.getDate() + '/' + fechaHoy.getMonth() + '/' + fechaHoy.getFullYear()
  }

  generarReserva() {
    var fecha = this.fecha;
    var hora = this.hora;
    var centro = this.centro;
    var usuario = this.usuario;
    var doctor = this.doctor;
    var puntual = true;
    this.angularFirestore.collection('horasMedicas').add({ fecha, hora, doctor, usuario, centro, puntual }).then(() => {let alert = this.alertCtrl.create({
      title: 'Exito',
      message: 'Su reserva fue agendada exitosamente',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.push(HomePage,{user: usuario});
           }
        }]
    });
    alert.present();})
  }
}
