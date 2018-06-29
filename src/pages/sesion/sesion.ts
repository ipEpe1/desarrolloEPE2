import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sesion',
  templateUrl: 'sesion.html',
})
export class SesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SesionPage');
  }
  
  openMenu() {
    this.menuCtrl.enable(true, 'sesion');
  }

}
