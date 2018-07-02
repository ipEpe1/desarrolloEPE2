import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { HomePage } from '../home/home';

/**
 * Generated class for the SesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Usuario{
  nombre: string;
  apellido: string;
  codigoTributario: string;
  correo: string;
  password: string;
  id : string;
}

@IonicPage()
@Component({
  selector: 'page-sesion',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: Usuario;
  rut: string;
  password: string;
  fakeUser:string;
  usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public angularFirestore: AngularFirestore, public alertCtrl: AlertController) {
    this.menuCtrl.enable(false);
    this.fakeUser= '2F45cnt4zR4fSJuZDRyDkE';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SesionPage');
  }

  openMenu() {
    this.menuCtrl.enable(true, 'start');
  }
  login(){
    this.usuariosCollection = this.angularFirestore.collection('usuarios', ref => ref.where('codigoTributario','==', this.rut).limit(1));
    console.log('bleh'+ this.rut);


  }
  registrarUsuario() { this.navCtrl.push(RegisterPage); }

  fakeLogin(userId: string){
    this.navCtrl.push(HomePage, {user: userId});
  }
}
