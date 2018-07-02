import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  nombre: string;
  apellido: string;
  codigoTributario: string;
  correo: string;
  password: string;
  repeatPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFirestore: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  validate() {
    if (this.password == this.repeatPassword) {
      this.saveUser(this.nombre, this.apellido, this.codigoTributario, this.correo, this.password);
      console.log('Usuario registrado correctamente')
    }
    else
      console.log('Usuario no registrado')

  }

  saveUser(nombre: string, apellido: string, codigoTributario: string, correo: string, password: string) {

    this.angularFirestore.collection('usuarios').add({ nombre, apellido, codigoTributario, correo, password })
  }
}
