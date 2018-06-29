import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  doctores: any = ['Test Doctor 1', 'Test Doctor 2', 'Test Doctor 3', 'Test Doctor 4', 'Test Doctor 5', 'Test Doctor 6', 'Test Doctor 7'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReservationPage');
  }

}
