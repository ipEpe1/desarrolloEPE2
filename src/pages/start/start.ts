import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the SesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sesion',
  templateUrl: 'start.html',
})
export class StartPage {
  user: string;
  password: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SesionPage');
  }

  openMenu() {
    this.menuCtrl.enable(true, 'start');
  }

  registrarUsuario() { this.navCtrl.push(RegisterPage); }


}
